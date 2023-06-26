const {models} = require("../db")
const {Users} = models;
const crypto = require("crypto");
const bcrypt = require("bcrypt")


const createUser = async (name, lastname, dni, email, password, direction, numphone, tipo_documento) => {
/*
genSaltSync: Cadena de caracteres aleatoria que se agrega al valor de la contraseña antes de realizar el hash
(10):determina la cantidad de rondas de encriptación que se realizarán internamente.
*/
const salt = bcrypt.genSaltSync(10); // Generar una sal para bcrypt

// Generar una clave derivada con scrypt
const N = 16384; // Número de iteraciones
const r = 8; // Factor de bloque
const p = 1; // Factor paralelo
const dkLen = 64; // Longitud de la clave derivada

 crypto.scrypt(password, salt, dkLen, {N, r, p}, async (err, derivedKey) => {
    if (err) {
        console.error(err,"este es el error");
        return;
    }else {
    const hash = bcrypt.hashSync(derivedKey.toString('hex'), 10);

  const create = await Users.create({
        name, lastname, dni, email, password: hash, direction, numphone, tipo_documento
});
    return create;
}})

}



module.exports = {
    createUser,

}