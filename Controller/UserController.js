const UserModel = require('../Models/UserModel.jsx');
const bcrypt = require('bcrypt');


module.exports.AddUser = async (req, res, next) =>{
    try {
        const { name, email, password } = req.body;

        const EmailCheck = await UserModel.findOne({email});

        if(EmailCheck){
            return res.json({msg : "Email already used", status : 'false'});
        };

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await UserModel.create({
            name,
            email,
            password : hashPassword,
        });

        delete user.password;
        return res.json({status : 'true', user});
    } catch (error) {
        next(error);
    }
} 

 
module.exports.LoginUser = async (req, res, next) =>{
    try {
        const {email, password} = req.body;

        const user = await UserModel.findOne({email});
        
        if(!user){
            return res.json({msg : 'Email does not match', status : 'false'});
        }

        const PasswordCheck = await bcrypt.compare(password, user.password);
        if(!PasswordCheck){
            return res.json({msg : 'Password does not match', status : 'false'});
        } 
       

        delete user.password;
        res.json({status : 'true', user});
    } catch (error) {
        next(error);
    }
}


