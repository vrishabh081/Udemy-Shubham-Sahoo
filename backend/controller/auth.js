const bcrypt = require("bcrypt");
const RegistrationModel = require("../model/auth");
const jwt = require("jsonwebtoken");

// registeration-
const register = (req, res)=>{
    const {name, email, password} = req.body;
    bcrypt.hash(password, 8, (err, secured_password)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            try
            {
                const userData = RegistrationModel({name, email, password: secured_password});
                userData.save();
                console.log("Successfully registered");
                return res.json({message : "Successfully registered"})
            }
            catch(error)
            {
                console.log(`error: ${error}`)
                return res.json({error})
            }
        }
    })
}


// login-
const login = (req, res)=>{
    const {email, password} = req.body
    RegistrationModel.findOne({email}).then(userData=>{
        if(!userData)
        {
            return res.json({error: "OOP's you are not registered"})
        }
        else
        {
            bcrypt.compare(password, userData.password, (err, matched_password)=>{
                if(!matched_password)
                {
                    console.log(err);
                    return res.json({error: "Password is not matching"})
                }
                else
                {
                    const token = jwt.sign(password, "social_media_app");
                    return res.json({"message": "Successfully loged in", token})
                }
            })
        }
    })
}

module.exports = {register, login}