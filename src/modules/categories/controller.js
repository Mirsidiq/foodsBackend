import { customError } from "../../exception/customError.js";
import { CategoryModel } from "./model.js";
const categories = async (req, res, next) => {
  try {
    const data = await CategoryModel.findAll({attributes:["id","name"]});
    data.length > 0
      ? res.status(200).json({
          message: "categories",
          data,
        })
      : res.status(404).json({
          message: "not found",
          data,
        });
  } catch (error) {
    next(new customError(500, error.message));
  }
};
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await CategoryModel.findByPk(id,{attributes:["id","name"]});
    data
      ? res.status(200).json({
          message: "category",
          data,
        })
      : res.status(404).json({
          message: "not found",
          data,
        });
  } catch (error) {
    next(new customError(500, error.message));
  }
};
const addCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newCategory = await CategoryModel.create({ name });
    newCategory
      ? res.status(201).json({
          message: "created",
          data: newCategory,
        })
      : res.status(400).json({
          message: "not created",
          data: {},
        });
  } catch (error) {
    next(new customError(500, error.message));
  }
};
const updateCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const updatedCategory = await CategoryModel.update(
      { name },
      {
        where: {
          id,
        },
        returning: true,
      }
    );
    updatedCategory[0]==1
      ? res.status(201).json({
          message: "updated",
          data: updatedCategory[1],
        })
      : res.status(400).json({
          message: "not updated",
          data: {},
        });
  } catch (error) {
    next(new customError(500, error.message));
  }
};
const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCategory = await CategoryModel.destroy(
      {
        where:{
          id
        }
      }
    );
    deletedCategory==1
      ? res.status(201).json({
          message: "deleted",
          data: deletedCategory[1],
        })
      : res.status(400).json({
          message: "not deleted",
          data: {},
        });
  } catch (error) {
    next(new customError(500, error.message));
  }
};
export { categories, getById, addCategory,updateCategory,deleteCategory };
