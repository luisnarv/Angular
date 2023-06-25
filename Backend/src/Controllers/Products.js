
const {models} = require("../db")
const {Products} = models
const axios = require("axios")
import ("dotenv")

const {API} = process.env; 


const getApiProducts = async ( ) => {
const data = await axios.get(API);
let products = data.data.map((e) => {
    return {
        productName:e.title, 
        description:e.description, 
        price:e.price,
        category:e.category.name,
        img: e.images ? e.category.image & e.images : "Not found" ,
    }
}) 

await Products.bulkCreate(products);
}

const getAllproducts = async () =>{
    const productsAll = await Products.findAll({where:{deleted: false}});
    return productsAll;
}



module.exports = {
    getApiProducts,
    getAllproducts,

}
