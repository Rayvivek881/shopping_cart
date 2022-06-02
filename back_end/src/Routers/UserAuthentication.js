const UserAuth = require("express").Router();
const User = require('../../Models/UserData/User.js')
const isOkEmail = require('../middlewares/EmainVarification.js')
const tokenobj = require('../middlewares/jwt.js')
const Authentication = require('../middlewares/Authentication.js')

UserAuth.post('/signup', async (req, res) => {
    const {firstName, Email} = req.body;
    const SearchUser = User.findOne({ Email }).select({_id : true});
    if (SearchUser != null) {
        res.send({isVerified: false, massage: `email is not unique`});
    } else {
        const otp = await isOkEmail(Email, firstName);
        res.send({isVerified: true, otp : otp});
    }
});

UserAuth.patch('/signup', async (req, res) => {
    const {firstName, lastName, Email, Password} = req.body;
    const newUser = User({
        firstName, lastName, 
        Email, Password
    });
    const result = await newUser.save();
    res.send({newUser, isVerified: true});
})

UserAuth.post('/login', async (req, res) => {
    const { Email, Password } = req.body;
    const result = await User.findOne({ Email : Email});
    if(result == null) {
        res.send({isVerified: false, massage: 'username not exist please check username'});
    } else if (result.Password !== Password) {
        res.send({isVerified: false, massage: 'password is not correct please forget password'});
    } else {
        const token = await tokenobj.VerifyToken(result._id, result.firstName, 0);
        let options = {
            maxAge: 1000 * 60 * 120,
            httpOnly: true,
        }
        res.cookie('user_id', token , options);
        res.send({isVerified: true, data: result});
    }
})
UserAuth.get('/logout', (req, res) => {
    let options = {
        maxAge: 10,
        httpOnly: true,
    }
    res.cookie('user_id', '' , options);
    res.send({done: true});
})

UserAuth.get('/forget-pass', async (req, res) => {
    const { Email } = req.body;
    const result = User.findOne({Email : Email}).select({firstName: true});
    if (result == null) {
        res.send({isVerified: false, massage: 'user with this email not exist please check again'});
    } else {
        let otp = await isOkEmail(Email, result.firstName);
        res.send({isVerified : true, otp : otp});
    }
});

UserAuth.post('/forget-pass', async (req, res) => {
    const { Email, Password } = req.body;
    const result = User.updateOne({Email : Email}, {
        $set : {
            Password : Password
        }
    }, { useFindAndModify: false });
    res.send({isVerified: true, data : result});
})

module.exports = UserAuth;
