import { sign } from "../../utils/jwt.js"
import { adminPost } from "./model.js"

const postUser = async (req, res, next) => {
  const admin = await adminPost(req.filteredValue)
  delete admin[0].password
  if (admin.length > 0) {
    res.status(200).json({
      message: "welcome",
      data: admin,
      token: sign(admin[0].user_id)
    })
  }
  else {
    res.status(401).json({
      message: "wrong username or password",
      data: [],
      token: null
    })
  }
}
export {
  postUser
}