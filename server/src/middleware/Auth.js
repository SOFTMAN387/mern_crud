
const Register = require("../models/studentSchema");

const auth = async(req , res , next )=>{
    try {
        
        // const cookie_token = req.cookies.jwt;
        // const verify_token = jwt.verify(cookie_token,);
        // const userData = Register.findOne({_id:verify_token._id});
        //  req.token = token;
        //  req.userData = userData;
        // console.log(userData);

        //console.log(verify_token);
        next();
    } catch (error) {
        console.log(error);
    }
  
}

module.exports = auth;