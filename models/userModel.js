const mongoose = require('mongoose');


// define the User model schema
const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    default:null
  },
  email:{
    type:String,
    unique: true,
    default:null
  },
  mobileNumber:{
    type:Number,
    default:null
  },
  postalAddress:{
    type:String,
    default:null
  }
  
});



module.exports = mongoose.model('User', UserSchema);