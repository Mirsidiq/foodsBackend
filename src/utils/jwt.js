import jwt from "jsonwebtoken"

const sign = payload => jwt.sign(payload, process.env.SECRET_KEY)

const verify = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
            if (err instanceof jwt.JsonWebTokenError) reject(err)
            resolve(decode)
        })
    })
}
export {
    sign,
    verify
}