const Router = require("express");
const {header, body} = require("express-validator");
const Vrequest = require("../Middlewares/V-Request");
const VjsonWT = require("../Middlewares/V-Jsonwebtoke");
const { handlersGetApiProducts, handlersgetAllproducts, hanlersCreateProduct,
 } = require ("../Handlers/Products");



 const router = Router();
  
 router.get("/products1",
 handlersGetApiProducts
 );

 router.get("/allproducts", handlersgetAllproducts);

 router.post("/create",[
    header("token", "token es obligatorio").not().isEmpty(),

    body('productName', 'Nombre es obligatorio').not().isEmpty(),
     body('productName', 'Nombre debe de ser de 2 a 50 caracteres de largo').isLength({ min: 2, max: 50 }),

    body('description', 'La descripción es obligatorio').not().isEmpty(),
    body('description', 'La Descripción debe de ser de 10 a 500 caracteres de largo').isLength({ min: 10, max: 500 }),

    body('category', 'Categoria es obligatorio').not().isEmpty(),
    body('category', 'La Categoria debe de ser de 2 a 50 caracteres de largo').isLength({ min: 2, max: 50 }),
    
    body('price', 'El precio es obligatorio').not().isEmpty(),
    body('img', 'El image es obligatorio').not().isEmpty(),

    Vrequest,
    VjsonWT,
 ], hanlersCreateProduct);


 module.exports = router;