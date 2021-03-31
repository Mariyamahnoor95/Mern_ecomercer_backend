 import express from "express"
 const router = express.Router()
 import  Product from '../models/productModel.js'
 import asyncHandler from "express-async-handler"


//  @dec  fetch all products
//  @route GET /api/products 
//  @access  public
 router.get(
     "/",
     asyncHandler(async (req,res)=>{

    const products = await Product.find({}) 
    
    res.json(products)
}))




//  @dec  fetch all product by id
//  @route GET /api/products/:id ---------
//  @access  public
router.get("/:_id",asyncHandler(async (req,res)=>{
    const product =await Product.findById(req.params._id)

    if(product){
        res.json(product)
    }
    else{
        res.status(404).json({ message:"Product not found"})
    }
   
}))

 export default router