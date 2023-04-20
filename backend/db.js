const mongoose = require('mongoose');
const mongoURI='mongodb+srv://banerjeesagnik29:Arju01%40%25@cluster0.nh3sdco.mongodb.net/?retryWrites=true&w=majority';

const mongoDB=async()=>{
await mongoose.connect(mongoURI,{useNewURlParser:true},(err,result)=>{

    if(err)
    console.log("---",err);
    else
    console.log("connected");
});
}

module.exports=mongoDB