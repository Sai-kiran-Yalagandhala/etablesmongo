const mongoose = require('mongoose')

const RestSchema = new mongoose.Schema({
    image:{
        type:String,
        trim:true,
        default:null
    },
    restName:{
        type:String,
        trim:true,
        default:null
    },
    tag:{
        type:String,
        trim:true,
        default:null
    },
    address:{
        type:String,
        trim:true,
        default:null
    },
    email:{
        type:String,
        trim:true,
        default:null
    },
    number:{
        type:Number,
        trim:true,
        default:null
    }
    
})

module.exports = mongoose.model('Restaurant', RestSchema);
