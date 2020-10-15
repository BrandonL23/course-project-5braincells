const Users = require('../models/Users');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Listings = require('../models/Listings');

module.exports = app =>{

  app.get('/', (req,res)=>{
    res.send(`<div>Hello</div>`)
  })

  app.get('/user' , async(req,res,next)=>{
        try{
        const users = await Users.find({});

        res.send(users);
        // res.sendStatus(200);
      }
      catch(err){
        res.sendStatus(400);
      }
  })



  app.post('/signup', async (req, res)=>{

      try{


      const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const email = req.body.email;
      const password = req.body.password;
      const location = req.body.location;
      const phone = req.body.phone;
      

        const newUser = new Users();
        newUser.firstname = firstname;
        newUser.lastname = lastname;
        newUser.password =  bcrypt.hashSync(password,14);
        newUser.email = email;
        newUser.listOfJobs = [];
        newUser.phone = phone;
        newUser.location = location;
        const user = await newUser.save();


        res.status(201).send(user);
      }
      catch(err){
        res.sendStatus(400);
      }


});
//add listings
app.post('/addListing', async(req,res) =>{
  const user_id = req.body.user_id;

  const newList = new Listings();
  newList.jobType = req.body.jobType;
  newList.language = req.body.language;
  newList.description = req.body.description;

  const List = await newList.save();
  if(List){
    list_id = List._id;

    try{
      Users.findOne({_id : user_id}, async(err, user) =>{
        if(user){
          list = user.listOfJobs;
          list.push(list_id);
          toPush = { listOfJobs : list};
          toPush = JSON.stringify(toPush);

          const ello = await Users.findByIdAndUpdate(user_id, {"$push" :{"listOfJobs": list_id}});
          res.send(list_id);
        }
      })

     
    } catch(err){
      res.send(404);
      return next(new errors.ResourceNotFoundError(`There is no user with id of ${user_id}`));
    }

    

  }
})

app.post('/login', async(req,res) =>{
  console.log(req.body)
  try{
    Users.findOne({email : req.body.email}, (err,user)=>{
      if(err || !user || !bcrypt.compareSync(req.body.password, user.password) ){
          res.sendStatus(400);
      }

      if(req.body.email == user.email && bcrypt.compareSync(req.body.password, user.password)){

        res.send(user)

      }


    });
  }
  catch(err){
    res.send(400);
  }


})



}