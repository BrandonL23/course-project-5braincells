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
   }



 });
 UsersSchema.plugin(timestamp);

 const Users = mongoose.model('Users',UsersSchema);
 module.exports = Users