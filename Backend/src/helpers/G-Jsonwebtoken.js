const jwt = require('jsonwebtoken')
require("dotenv").config();

const {SECRET_JWT_KEY} = process.env;


  const generateJWT = (id) => {
    return new Promise((resolve, reject) => {
        const payload = { id }
        jwt.sign(
             payload,
            SECRET_JWT_KEY, 
            { expiresIn: 40 * 45},
            (err, token) => {
                if (err) {
                    console.log(err)
                    reject('No se pudo generar el token')
                }
                resolve(token)
            })
    })
}


module.exports = generateJWT