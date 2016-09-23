var mongoose=require("mongoose") ;
var users=require("./model/users");
var express=require('express');
var app=express();


mongoose.connect('mongodb://localhost:27017/users',function(error){
  if(error)
{
  console.log(error);
}
});

var db=mongoose.connection;
db.on('error',console.error.bind(console,'Connecion error ...!'));
db.once('open',function()
{
  console.log("connection to mongo db success");
});

app.get('/',function(req,res){
  res.send("<a href='/users'>show data</a>");
});

app.post('userinsert/:userid/:password',function(req,res)
{
  var user=new user();
  user.username=req.param.userid;
  user.password=req.param.password;
  user.save(function(err){
    if(err){
      res.send(err);
    }
    else
      {
        res.send('user created');

      }

  });
});
