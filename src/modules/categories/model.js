import { DataTypes } from "sequelize";
import {sequelize} from "../../utils/sequelize.js";
const CategoryModel=sequelize.define("categories",{
  name:{
    type:DataTypes.STRING(32),
    allowNull:false
  }
})
export{
  CategoryModel
}