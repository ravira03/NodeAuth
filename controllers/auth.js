const User =  require("../models/User");

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
        res.status(500).json({
            sucess: false,
            error: error.message,
        });
    }
};

exports.login =  async (req,res,next) => {
    const { email, password } = req.body;

    if(!email || !password){
        res.status(400).json({ success: false, error: "Please provide email and password"});
    }

    try{
        const user = await User.findOne({ email }).select("+password");

        if(!user){
            res.status(404).json({ sucess: false, error: "Invalid credentials"});
        }

        const isMatch = await user.matchPasswords(password);

        if(!isMatch){
            res.status(404).json({ sucess: false, error: "Invalid credentials"})
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