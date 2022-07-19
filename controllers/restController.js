const Restaurant = require('../models/restModel')

exports.addRestaurant =async (req,res)=>{
    const {restImage, restName, restTag, restAddress, restMobile, restEmail} = req.body
const restInfo = {
    image:restImage,
    restName:restName,
    tag:restTag,
    address:restAddress,
    email:restEmail,
    number:restMobile
}
const _rest = new Restaurant(restInfo)
_rest.save().then(async(data)=>{
    res.status(200).json({status:true, message:"success", data:data})
}).catch((error)=>{
    res.status(500).json({status:false, message:"error", error:error})  
})
}

exports.getRestaurant=async(req,res)=>{
    try{   
        const rest = await Restaurant.findOne({_id:"62d667a9997ede4cde108404"})
        res.status(200).json({status:true, message:"success", data:rest})
    }catch(error){
        res.status(500).json({status:false, message:"error", error:error})  

    }


}