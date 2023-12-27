const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// const authtenticate=require("../middleware/authtenticate");
const authenticate = require("../middleware/authtenticate");

require('../db/conn');
const User=require("../model/userSchema");
const { default: mongoose } = require("mongoose");


router.get('/',(req,res)=>{
    res.send("Hello world from the server router js");
})
 // promisease

// router.post('/register',  (req,res)=>{
//     const {name,email,phone,work,password,cpassword}=req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json({error : "Please filled the field property" });
//     } 
//     User.findOne({email:email})
//     .then((userExist) =>{
//         if(userExist){
//             return res.status(422).json({error:"email allready Exist"});

//         }
    
//         const user=new User({name,email,phone,work,password,cpassword})

//         user.save().then(()=>{
//             res.status(201).json({message:"user registered successful"});
//         }).catch((err)=>res.status(500).json({error:"failes to registered "}))
//     }).catch(err=>console.log(err))
// })



// async await

router.post('/register', async (req,res)=>{
    const {name,email,phone,work,password,cpassword}=req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error : "Please filled the field property" });
    } 

    try {
        const userExist = await User.findOne({email:email})
        if(userExist){
            return res.status(422).json({error:"email allready Exist"});
        } else if(password!=cpassword){
            return res.status(422).json({error:"email allready Exist"});
        } else {
            const user=new User({name,email,phone,work,password,cpassword})
            console.log(user);


            await user.save();
            res.status(201).json({message:"user registered successful"});
    
        }



        // const userRegister = await user.save();
       
    } catch (err) {
        console.log(err);
    }
    
})

// login route
router.post('/signin', async (req,res)=>{
    console.log("Ripukesh");
    try {
        let token;
        const {email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({message : "Plz filled the data"});     
        }
        const userLogin = await User.findOne({email:email});

        if(userLogin){
            const isMatch=await bcrypt.compare(password,userLogin.password);

            token=await userLogin.generateAuthToken();
            console.log(token);

            // res.cookie("jwtoken",token,{
            //     expires:new Date(Date.now()+258900000),
            //     httpOnly:true
            // })
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 258900000),
                httpOnly: true,
            });

            if(isMatch){
                res.json({message:"user signin successfully"})
            }else{
                res.status(400).json({message:"invalid Credential"})
            }
        } else {
            res.status(400).json({error:"invalid Credential"})
        }

    } catch (err) {
        console.log(err);
    }
});

// about us ka page 
// router.get('/about',authenticate,(req,res)=>{
//     console.log("about page");
//     res.send(req.rootUser);
// })

router.get('/about',authenticate,(req,res)=>{
    console.log("about page")
    res.send(req.rootUser);
});

router.get('/getdata',authenticate,(req,res)=>{
    console.log("user data ")
    res.send(req.rootUser);
})

router.post('/contact',authenticate, async (req,res)=>{
    // console.log("user data ")
    // res.send(req.rootUser);
    try {
        const {name,email,phone,message} = req.body;
        if(!name || !email || !phone || !message){
            console.log("error in contact form");
            return res.json({error:"please filled the contact form"});
        } 
        const userContact = await User.findOne({_id:req.userID});
        if(userContact){
            const userMessage = await userContact.addMessage(name,email,phone,message);
            await userContact.save();

            res.status(201).json({message:"user contact successfull "});

        }
    } catch (err) {
        console.log(err);
    }


})

router.get('/logout',(req,res)=>{
    console.log("hello my logout page");
    res.clearCookie('jwtoken',{path:'/'});
    res.status(200).send("user Logout");

});


module.exports=router;




