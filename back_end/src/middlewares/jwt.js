const jwt = require('jsonwebtoken');
const mykey = `jvhdfjhvjdfjkdfhdfhjkdfhjkhdfdhfhdjhjdsv`

const CreateToken = async (_id, firstName, accountType) =>{
    const token = await jwt.sign({_id: _id, firstName: firstName, accountType : accountType}, mykey, {
        expiresIn: '3h',
    });
    return token;
}

const VerifyToken = async (token) => {
    let payload;
    try {
        payload = await jwt.verify(token, mykey);
        payload = {
            ...payload,
            isVerified: true
        }
    } catch(err) {
        payload = {
            ...payload,
            isVerified: false
        }
    }
    return payload;
}
const tokenobj = {
    CreateToken: CreateToken,
    VerifyToken: VerifyToken
}
module.exports = tokenobj;