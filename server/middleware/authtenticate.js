const jwt=require('jsonwebtoken');
const User=require("../model/userSchema")

const Authenticate= async (req,res,next)=>{
   
    try {
        console.log("Authtenticate try");

        const token = req.cookies.jwtoken;
        console.log("Authtenticate try1");

        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        // const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        console.log("Authtenticate try2");

        const rootUser = await User.findOne({_id:verifyToken._id,"tokens.token":token});
        console.log("Authtenticate try3");

        if(!rootUser){
            console.log("user not found ");

            throw new Error('user not Found')
        }
        console.log("Authtenticate try4");

        req.token=token;
        req.rootUser=rootUser;
        console.log("Authtenticate try5");

        req.userID=rootUser._id;
        console.log("Authtenticate try6");

        next();

    } catch (err) {
        res.status(401).send('Unauthorized : no token provide ');
        console.log(err);
        // console.log("Error")
    }
}

module.exports = Authenticate


// R@gmail.com