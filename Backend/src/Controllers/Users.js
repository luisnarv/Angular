require("dotenv").config()
const { models } = require("../db")
const { Users } = models;
const crypto = require("crypto");
const bcrypt = require("bcrypt")
const GjsonToken = require("../helpers/G-Jsonwebtoken")
const {SALT,ITERATIONSNUM, BLOCKF, BLOCKP, LENGTH} = process.env


const createUser = async (name, username, lastname, dni, email, password, direction, numphone, tipo_documento) => {
    /* genSaltSync: Cadena de caracteres aleatoria que se agrega al valor de la contraseña antes de realizar el hash
    (10):determina la cantidad de rondas de encriptación que se realizarán internamente. */

    // const salt ; // Generar una sal para bcrypt
    // console.log(salt)
    // // Generar una clave derivada con scrypt
    // const N = 16384; // Número de iteraciones
    // const r = 8; // Factor de bloque
    // const p = 1; // Factor paralelo
    // const dkLen = 64; // Longitud de la clave derivada



    crypto.scrypt(password, SALT, LENGTH, { ITERATIONSNUM, BLOCKF, BLOCKP }, async (err, derivedKey) => {
        if (err) {
            console.error(err, "este es el error");
            return;
        } else {
            const pass = derivedKey.toString('hex');
            const hash = bcrypt.hashSync(pass, 10);
            console.log(hash);

            const create = await Users.create({
                name, username, lastname, dni, email, password: hash, direction, numphone, tipo_documento
            });
            return create;
        }
     })


    // crypto.scrypt(password, salt, dkLen, { N, r, p }, async (err, derivedKey) => {
    //     if (err) {
    //         console.error(err, "este es el error");
    //         return;
    //     } else {
    //         const hash = bcrypt.hashSync(derivedKey.toString('hex'), 10);
    //         console.log(hash);

    //         const create = await Users.create({
    //             name, username, lastname, dni, email, password: hash, direction, numphone, tipo_documento
    //         });
    //         return create;
    //     }
    // })
}




const loginUser = async (username, password) => {
    const user = await Users.findOne({ where: { username } })

  //user.password.slice(0,64)

    crypto.scrypt(password, salt, dkLen, { N, r, p }, async (err, derivedKey) => {
        if (err) {
            console.error(err);
            return;
          }


          const passw = derivedKey.toString('hex');
          
        const pass = await bcrypt.compare(passw, user.password)
        console.log(pass)
       //=== user.password ? console.log("contrasñe incorrecta") : console.log("contraseña correcta")


         if (pass === true){ 
            const token = await GjsonToken(user.id);
            return ({
            token:token, 
            user: `${user.name} ${user.lastname}, ${user.username} `
        })}else{
        throw Error("Usuario / Contraseña incorrectos")
}
       
   })


}


module.exports = {
    createUser,
    loginUser,

}