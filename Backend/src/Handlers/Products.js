const { getApiProducts, getAllproducts, createProduct } = require("../Controllers/Products");




const handlersGetApiProducts = async (req, res) => {
    const products = getApiProducts();
    res.status(200).json(products);
}

const handlersgetAllproducts = async (req, res) => {
    const products = await getAllproducts();
    res.status(200).json(products);
}

const hanlersCreateProduct = async (req, res) => {
    const { productName, description, price, category, img } = req.body
    try {
        await createProduct(productName, description, price, category, img)
        res.status(201).json({ msg: "Create Successfull" })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = {
    handlersGetApiProducts,
    handlersgetAllproducts,
    hanlersCreateProduct,

}