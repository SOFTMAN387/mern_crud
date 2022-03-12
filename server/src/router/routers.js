const express = require("express");
const router = express.Router();
const auth = require("../middleware/Auth");
const crudcol = require("../models/studentSchema");

router.get("/",(req,res)=>{
    console.log("jay maa sarswati...");
})

//login here

router.post("/login",async(req,res)=>{
   
   const {email,password}= req.body;
   
   const loginPassword= password;
   const registerEmail = await crudcol.findOne({email:email});
   if(registerEmail){
       if(loginPassword===registerEmail.password){
        console.log("Login sucessful !!..");
       }else{
           console.log("Invalid userName & Password");
       }


   }else{
    console.log("Invalid userName & Password");
   }
})


//students registration

router.post("/register",async(req,res)=>{
    console.log(req.body);
    const {name,email,phone,roll,profession,password,c_password}=req.body;
    
    if(!name|| !email|| !phone|| !roll|| !profession|| !password|| !c_password){
        res.status(422).send("please fill every field");
    }
    try {
        const registerStudents = await crudcol.findOne({email:email});
        if(registerStudents){
           console.log("Email already Exists..");
        }else{
            
            const stdReg = await new crudcol({
                name,email,phone,roll,profession,password,c_password

            });
            const result = await stdReg.save();
            console.log("data added sucessful!!..");
            res.status(201).json(result);
            console.log(result);
            
        }

    } catch (error) {
        console.log(error);
        
    }
})

//login students....



//getting all students data from database

router.get("/getstudents",auth,async(req,res)=>{
    try {
        const userData = await crudcol.find();
        res.status(201).json(userData);
        console.log(userData);
        
    } catch (error) {
        res.status(422).json(error);
    }
})


//getting students data indivisualy by id..
router.get("/viewstudentsbyid/:id",auth,async(req,res)=>{

    try {
        console.log(req.params);
        const {id}=req.params;
        const viewStudents = await crudcol.findById({_id:id});
        console.log(viewStudents);
        res.status(201).json(viewStudents);
        
    } catch (error) {
        res.status(422).json(error);
        
    }
})

//updating user by id...

router.patch("/updatestudentsbyid/:id",auth,async(req,res)=>{
    console.log(req.params);
    const {id}= req.params;
    try {
        const updateById= await crudcol.findByIdAndUpdate(id,req.body,{
            new:true
        });
        console.log(updateById);
        res.status(201).json(updateById);
    } catch (error) {
        res.status(422).json(error);
    }

})


// deleting user by id..
router.delete("/deletestudents/:id",auth,async(req,res)=>{
    console.log(req.params);
    const {id}= req.params;
    try {
        const deleteById= await crudcol.findByIdAndDelete({_id:id});
        console.log(deleteById);
        res.status(201).json(deleteById);
    } catch (error) {
        res.status(422).json(error);
    }

})



module.exports = router;