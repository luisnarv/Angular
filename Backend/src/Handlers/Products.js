const {getApiProducts, getAllproducts} = require("../Controllers/Products");




const handlersGetApiProducts = async (req , res) => {
   const products =  getApiProducts();
   res.status(200).json(products);
}

const handlersgetAllproducts = async (req, res) => {
    const products = await getAllproducts();
    res.status(200).json(products);
}

module.exports = {
    handlersGetApiProducts,
    handlersgetAllproducts,

}