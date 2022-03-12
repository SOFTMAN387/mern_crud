// const mongoose = require("mongoose");
// const DB = "mongodb+srv://TheSoftMan:softman@150@cluster0.rldlr.mongodb.net/cruddb?retryWrites=true&w=majority";
// mongoose.connect(DB,
//     {
       
       
        
//         useUnifiedTopology:true
// }).then(()=>console.log("connection sucess!!..")).catch(
//     (e)=>
//         console.log("e.message")

// );


const mongoose = require("mongoose");
const dbUrl = "mongodb+srv://TheSoftMan:softman150@cluster0.rldlr.mongodb.net/cruddb?retryWrites=true&w=majority";
mongoose.connect(dbUrl,{
         useNewUrlParser:true,
         useUnifiedTopology: true
       
     }).then(()=>{
    console.log("connection sucessful!!..");
}).catch(error=>{
    console.log("Not connected");
});
