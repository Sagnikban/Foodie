const express=require('express')
const router=express.Router()
const User=require('../models/User')
const {body,ValidationResult}=requie('express-vaildator')
router.post("/createuser",
body('email').isEmail(),
body('password','Incorrect Password').isLength({min:6}),

async(req,res)=>
{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() })
    }
   try
   {
   await User.create({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
        location:req.body.location,
   })

   res.json({sucess:true});
 }
   catch(error)
   {
      res.json({sucess:false});
      console.log(error)
   }
}
)

module.exports=router;