const tokenobj = require('./jwt')
const Authentication = async (req, res, next) => {
    const { user_id } = req.cookies;
    if (user_id === undefined) {
        res.send({isVerified: false, massage: 'user is not Authentication'});
    } else {
        const cookieobj = await tokenobj.VerifyToken(user_id);
        if (cookieobj.isVerified === false) {
            res.send({isVerified: false})
        } else {
            req.user = {
                myid: cookieobj._id,
                firstName: cookieobj.firstName,
                accountType: cookieobj.accountType,
            }
            next();
        }
    }
}
module.exports = Authentication;