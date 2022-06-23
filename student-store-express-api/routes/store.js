const express = require("express")
const Store = require("../models/store")
const router = express.Router()

router.get("/store", async (req, res) =>{
    res.status(200).json(Store.fetchProducts())
})

router.get("/store/:productId", async (req, res)=>{
    res.status(200).json(Store.fetchProductById(req.params.productId))
})

/*router.post("/store",async (req,res)=> {
    const shoppingCart = req.body.shoppingCart
    const user = req.body.user             
   
    if(shoppingCart && user){
        shoppingCart.forEach(async (item) =>{
            const 
        })
    }
})*/
 

module.export = router