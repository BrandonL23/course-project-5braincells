const { ObjectId } = require('mongoose');
const mongoose = require('mongoose');
 const timestamp = require('mongoose-timestamp');
 


 const UsersSchema = new mongoose.Schema({
   //add requirements


   firstname: {
     type:String,
     default :"",
     trim:true
   },

   lastname:{
     type:String,
     default :"",
     trim:true

   },

   email:{
     type :String,
     required: true,
     default :"",
 

     trim:true
   },


   password:{
     type : String,
     required: true,
     default :"",

   },
   listOfJobs:{
     type : [ObjectId],
     default : [],
   },
   location: {
     type : String,
     default:"",
   },
   phone :{
    type : String,
    default : ""
   },
   ratings :{
     type :[ObjectId],
     default: []
   },
   language:{
     type:String,
     default:""
   },
   description:{
     type:String,
     default:""
   },
   listOfRequest:{
     type: [ObjectId],
     default :[]
   },
   verify:{
     type : Boolean,
     default: false
   },
   lat:{
      type : Double,
      default : 0.0
   },
   long:{
      type : Double,
      default : 0.0
   }



 });
 UsersSchema.plugin(timestamp);

 const Users = mongoose.model('Users',UsersSchema);
 module.exports = Users
