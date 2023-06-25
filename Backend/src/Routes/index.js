const Router = require ("express");

const getApiProducts = require("./products")

const router = Router();

router.use("/Product", getApiProducts);

module.exports = router