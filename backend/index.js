const express=require('express')
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const app=express()
const pinRoute=require('./routes/pins')
const userRoute=require('./routes/users')

dotenv.config()
app.use(express.json())


// database connection 
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Mongodb Connected Successfully.")
}).catch((err)=>console.log(err))



// all api 
app.use('/api/pins',pinRoute)
app.use('/api/users',userRoute)


app.listen(5050,()=>{
    console.log('Server is running at port 5050')
})