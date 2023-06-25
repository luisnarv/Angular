const Router = require("express")
const   { handlersGetApiProducts,
    handlersgetAllproducts,
 } = require ("../Handlers/Products");



 const router = Router();
  
 router.get("/products1",
 handlersGetApiProducts
 );

 router.get("/allproducts", handlersgetAllproducts);


 module.exports = router;