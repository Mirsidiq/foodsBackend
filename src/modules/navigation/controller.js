import { customError } from "../../exceptions/customErrorClass.js"
import { verify } from "../../utils/jwt.js";
import { navBarDelete, navBarGet, navBarPost, navBarPut } from "./model.js"
const getNavigation = async (_, res, next) => {
    try {
        const navBar = await navBarGet()
        res.status(200).json({
            totalCount: navBar.length,
            message: "Navbar items",
            data: navBar
        })
    } catch (error) {
        next(new customError(500, error.message))
    }
}
const postNavigate = async (req, res, next) => {
    try {
        const { token } = req.headers
        if (token) {
            const decode = await verify(token)
            if (decode) {
                const { navigation_title } = req.body
                const navBar = await navBarPost([navigation_title])
                res.status(201).json({
                    message: "Navbar item added",
                    data: navBar
                })
            }
            else {
                res.status(401).json({
                    message: "unauthorized",
                    data: []
                })
            }
        }
        else {
            res.status(401).json({
                message: "provide with token",
                data: []
            })
        }
    } catch (error) {
        next(new customError(400, error.message))
    }
}
const putNavigate = async (req, res, next) => {
    try {
        const { token } = req.headers
        const { navigation_title } = req.filteredValue
        const { id } = req.filteredParams
        if (token) {
            const decode = await verify(token)
            if (decode) {
                const navBar = await navBarPut([id, navigation_title])
                res.status(navBar.length > 0 ? 201 : 404).json({
                    message: navBar.length > 0 ? "Navbar item updated" : "Navbar item not found",
                    data: navBar
                })
            }
            else {
                res.status(401).json({
                    message: "unauthorized",
                    data: []
                })
            }
        }
        else {
            res.status(401).json({
                message: "provide with token",
                data: []
            })
        }
    } catch (error) {
        next(new customError(400, error.message))
    }
}
const deleteNavigate = async (req, res, next) => {
    try {
        const { token } = req.headers
        const { id } = req.filteredParams
        if (token) {
            const decode = await verify(token)
            if (decode) {
                const navBar = await navBarDelete([id])
                res.status(navBar.length > 0 ? 201 : 404).json({
                    message: navBar.length > 0 ? "Navbar item deleted" : "Navbar item not found",
                    data: navBar
                })
            }
            else {
                res.status(401).json({
                    message: "unauthorized",
                    data: []
                })
            }
        }
        else {
            res.status(401).json({
                message: "provide with token",
                data: []
            })
        }
    } catch (error) {
        next(new customError(400, error.message))
    }
}
export {
    getNavigation,
    postNavigate,
    putNavigate,
    deleteNavigate
}