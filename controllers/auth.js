exports.register = (req,res,next) => {
    res.send("Register Route");
};

exports.login = (req,res,next) => {
    res.send("Login Route");
};

exports.forgotpasswd = (req,res,next) => {
    res.send("Forgot Password Route");
};

exports.restpasswd = (req,res,next) => {
    res.send("Reset Password Route");
};