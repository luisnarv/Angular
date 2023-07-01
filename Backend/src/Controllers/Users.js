require("dotenv").config()
const { models } = require("../db")
const { Users } = models;
const crypto = require("crypto");
const bcrypt = require("bcrypt")
const GjsonToken = require("../helpers/G-Jsonwebtoken");
const { where } = require("sequelize");
const { SALT, ITERATIONSNUM, BLOCKF, BLOCKP, LENGTH } = process.env


const createUser = async (name, username, lastname, dni, email, password, direction, numphone, tipo_documento) => {

    const check = await Users.findAll({ where: { username } })
    if (check === true) throw new Error("Nombre de usuario ya existe")
    const length = 64;

    const derivedKeyNew = await new Promise((resolve, reject) => {
        crypto.scrypt(password, SALT, length, { ITERATIONSNUM, BLOCKF, BLOCKP }, (err, key) => {
            if (err) reject(err);
            resolve(key);
        });
    });

    const passNew = derivedKeyNew.toString('hex');
    const hash = bcrypt.hashSync(passNew, 10);

    const create = await Users.create({
        name, username, lastname, dni, email, password: hash, direction, numphone, tipo_documento
    });
    return create;

}



const loginUser = async (username, password) => {
    const user = await Users.findOne({ where: { username } });

    const length = 64;
    crypto.scrypt(password, SALT, length, { ITERATIONSNUM, BLOCKF, BLOCKP }, async (err, derivedKey) => {
        if (err) {
            console.error(err);
            return;
        }
        const passw = derivedKey.toString('hex');
        const pass = await bcrypt.compare(passw, user.password)
        if (!pass) { throw new Error("Usuario / Contraseña incorrectos") };

    })
    return ({
        token: await GjsonToken(user.id),
        user: `${user.name} ${user.lastname}, ${user.username} `
    })

}



const changeDatauser = async (last_username, name, username, lastname, dni, email, password, direction, numphone, tipo_documento) => {

    const check = await Users.findAll({ where: { username } })
    if (check === true) throw new Error("Nombre de usuario ya existe")
    const user = await Users.findOne({ where: { username: last_username } })

    const length = 64;
    crypto.scrypt(password, SALT, length, { ITERATIONSNUM, BLOCKF, BLOCKP }, async (err, derivedKey) => {
        if (err) {
            console.error(err);
            return;
        }
        const passw = derivedKey.toString('hex');
        const pass = await bcrypt.compare(passw, user.password);
        if (!pass) { throw new Error("Usuario / Contraseña incorrectos") };

    })
    const [rowsUpdate, [updateUser]] = await Users.update(
        { name, username, lastname, dni, email, direction, numphone, tipo_documento },
        { where: { id: user.id }, returning: true }
    );
    return updateUser;
}


const ChangePass = async (username, last_password, password) => {
    const length = 64;
    const user = await Users.findOne({ where: { username } })
    if (!user) { throw new Error("Usuario / Contraseña incorrectos") };


    const derivedKeyLast = await new Promise((resolve, reject) => {
        crypto.scrypt(last_password, SALT, length, { ITERATIONSNUM, BLOCKF, BLOCKP }, (err, key) => {
            if (err) reject(err);
            resolve(key);
        });
    });

    const passwLast = derivedKeyLast.toString('hex');
    const passMatch = await bcrypt.compare(passwLast, user.password);
    if (!passMatch) { throw new Error("Usuario / Contraseña incorrectos") };



    const derivedKeyNew = await new Promise((resolve, reject) => {
        crypto.scrypt(password, SALT, length, { ITERATIONSNUM, BLOCKF, BLOCKP }, (err, key) => {
            if (err) reject(err);
            resolve(key);
        });
    });

    const passNew = derivedKeyNew.toString('hex');
    const hash = bcrypt.hashSync(passNew, 10);

    const [rowsUpdate, [updateUser]] = await Users.update(
        { password: hash },
        { where: { id: user.id }, returning: true }
    );

    return updateUser;

}

module.exports = {
    createUser,
    loginUser,
    changeDatauser,
    ChangePass,

}