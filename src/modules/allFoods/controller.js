
const getFoods = async (req, res, next) => {
  try {
    let foods = await get()
    if (foods) {
      res.status(200).json({
        totalCount: foods.length,
        message: "all categories",
        data: foods
      })
    }
    else {
      res.status(404).json({
        totalCount: foods.length,
        message: "categories not found",
        data: []
      })
    }
  } catch (error) {
    next(new customError(500, error.message))
  }
}
