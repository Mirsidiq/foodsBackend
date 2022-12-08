import { fetchAll } from "../../lib/postgres.js"
import { LOGIN } from "./query.js"
const adminPost = async ({ username, password }) => {
  try {
    return await fetchAll(LOGIN, [username, password])
  } catch (error) {
    return error
  }
}
export {
  adminPost
}