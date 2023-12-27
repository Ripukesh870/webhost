const dotenv = require('dotenv');
const express=require('express');
const mongoose=require('mongoose');
const app=express();


const cookieParser = require('cookie-parser');
app.use(cookieParser());
dotenv.config({path:"./config.env"});
require('./db/conn');
const User = require('./model/userSchema');

app.use(express.json());

app.use(require('./router/auth'));

const PORT=process.env.PORT || 5000;

// const middlewere=(req,res,next)=>{
//     console.log("middlewere");
//     next();
// }
// middlewere();

// app.get('/',(req,res)=>{
//     res.send("Hello world from the server");
// })
// app.get('/about',middlewere,(req,res)=>{
//     console.log("about page")
//     res.send("Hello about ");
// })
// app.get('/contact',(req,res)=>{
//     res.cookie("Test",'ripu');
//     res.send("Hello contact");
// })
// app.get('/signin',(req,res)=>{
//     res.send("Hello singin");
// })
app.get('/singup',(req,res)=>{
    res.send("Hello singup");
})

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
}

app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`)
})














// const dotenv = require('dotenv');
// const express=require('express');
// const mongoose=require('mongoose');
// const app=express();

// dotenv.config({path:"./config.env"});
// require('./db/conn');

// // const DB=process.env.DATABASE;
// const PORT=process.env.PORT;
// // const DB='mongodb+srv://barbadking95347:barbadking95347@cluster0.l64cvuu.mongodb.net/mernstack?retryWrites=true&w=majority'
// // mongoose.connect(DB,{
// //     // useNewUrlParser: true,
// //     // useUnifiedTopology: true,
    
// // }).then(()=>{
// //     console.log('connection successfull')
// // }).catch((err)=>console.log('no connected',err))


// // middlewere

// const middlewere=(req,res,next)=>{
//     console.log("middlewere");
//     next();
// }
// // middlewere();

// app.get('/',(req,res)=>{
//     res.send("Hello world from the server");
// })
// app.get('/about',middlewere,(req,res)=>{
//     console.log("about page")
//     res.send("Hello about ");
// })
// app.get('/contact',(req,res)=>{
//     res.send("Hello contact");
// })
// app.get('/signin',(req,res)=>{
//     res.send("Hello singin");
// })
// app.get('/singup',(req,res)=>{
//     res.send("Hello singup");
// })


// app.listen(PORT,()=>{
//     console.log(`server is running at port no ${PORT}`)
// })