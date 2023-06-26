const Router = require ("express");

const getProducts = require("./products");
const user = require ("./users");

const router = Router();

router.use("/Product", getProducts);
router.use("/User", user);

module.exports = router