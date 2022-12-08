import { get,post,put,del } from "./query.js";
import { fetchAll } from "../../lib/postgres.js";
const navBarGet=async()=>{
    try {
        return await fetchAll(get)
    } catch (error) {
        return error;
    }
}
const navBarPost=async(params)=>{
    try {
        return await fetchAll(post,params)
    } catch (error) {
        return error;
    }
}
const navBarPut=async(params)=>{
    try {
        return await fetchAll(put,params)
    } catch (error) {
        return error;
    }
}
const navBarDelete=async(params)=>{
    try {
        return await fetchAll(del,params)
    } catch (error) {
        return error;
    }
}
export{
    navBarGet,
    navBarPost,
    navBarPut,
    navBarDelete
}