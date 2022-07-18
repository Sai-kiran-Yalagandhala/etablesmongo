const User = require('../models/userModel')

exports.addUser=(req,res)=>{
    const {fullName, email, mobileNumber, postalAddress} = req.body
    const info = {
        fullName:fullName,
        email:email,
        mobileNumber:mobileNumber,
        postalAddress:postalAddress
    }
    const _user = new User(info)
    _user.save().then((data)=>{
        res.status(200).json({status:true, message:"success", data:data})
    }).catch((error)=>{
        res.status(500).json({status:false, message:"false", error:error})
        
    })
}