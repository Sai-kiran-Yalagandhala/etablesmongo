const express = require('express')
const mongoose = require('mongoose')
const app = express()
mongoose.connect('mongodb+srv://akshatha:AkshathaKiran@cluster0.onivj.mongodb.net/etables?retryWrites=true&w=majority').then(()=>{
    console.log('connected')
}).catch((error)=>{
    console.log(error)
})
const userRouter = require('./routes/userRoutes')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api',userRouter)
const PORT = 8080
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})