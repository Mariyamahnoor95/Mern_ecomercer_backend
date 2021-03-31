import express from 'express'
import productRoutes from "./routes/productRoute.js"
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const app = express()

app.use((req,res, next)=>{
    console.log(req.originalUrl)
    next()
})
app.get("/",(req,res)=>{
    res.send('API IS RUNNING')
})
// app.get(
//     "/api/products",
//     asyncHandler(async (req,res)=>{

//    const products = await Product.find({}) 
//    res.json(products)
// }))

app.use('/api/products',productRoutes)

app.use((req ,res ,next)=>{
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}) 

app.use((err, req, res , next)=>{
    const statusCode =res.statusCode === 200 ? 500 : req.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
})


const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`${process.env.NODE_ENV} mode server running on port ${PORT}`.yellow.bold))