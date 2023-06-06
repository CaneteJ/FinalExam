const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://jasonzzz357:J@s09434792511@cluster0.e2cowj8.mongodb.net/user")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection