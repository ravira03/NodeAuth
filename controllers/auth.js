const User =  require("../models/User");
const ErrorResponse = require('../utils/errorResponse');

exports.register = async (req,res,next) => {
    const { username, email, password } = req.body;
    try{
        const user =  await User.create({
            username,
            email,
            password,
        });

        res.status(201).json({
            sucess: true,
            user,
        });
    }catch(error){
        next(error);
    }
};

exports.login =  async (req,res,next) => {
    const { email, password } = req.body;

    if(!email || !password){
        return next(new ErrorResponse("Please provide an email and password", 400))
    }

    try{
        const user = await User.findOne({ email }).select("+password");

        if(!user){
            return next(new ErrorResponse("Invalid Credentials", 401));
        }

        const isMatch = await user.matchPasswords(password);

        if(!isMatch){
            return next(new ErrorResponse("Invalid Credentials", 401));
        }

        res.status(200).json({
            sucess: true,
            token: "ab34rhsw221",
        });

    }catch(error){
        res.status(500).json({ success: false, error: error.message });
    }
};

exports.forgotpasswd = (req,res,next) => {
    res.send("Forgot Password Route");
};

exports.restpasswd = (req,res,next) => {
    res.send("Reset Password Route");
};