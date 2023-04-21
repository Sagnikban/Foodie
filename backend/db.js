const mongoose = require('mongoose');
const mongoURI='mongodb+srv://banerjeesagnik29:Arju01%40%25@cluster0.nh3sdco.mongodb.net/Foodie?retryWrites=true&w=majority';

const mongoDB=async()=>{
await mongoose.connect(mongoURI,{useNewURlParser:true},

    async(err,result)=>{

    if(err)
    console.log("---",err);
    else
    {
    console.log("connected");
    const fetched_data=await mongoose.connection.db.collection("food_items");
    fetched_data.find({}).toArray(function(err,data)
    {
        if(err)
        {
            console.log(err);
        }
        else{
            console.log();
        }
    })
    
    }
});
}

module.exports=mongoDB