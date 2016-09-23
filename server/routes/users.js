var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.get('/', function(req, res, next) {
  var num1=parseInt(req.param('num1'));
    var num2=parseInt(req.param('num2'));
     var n=num1+num2;
  res.send('movie displayed & result:'+n);
});



app.post('/userinsert/:userid/:password',function(req,res)
{
  var user=new User();
  user.username=req.params.userid;
  user.password=req.params.password;
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
app.delete('/userinsert/:userid',function(req,res,next)
{
  User=new User();

  User.find({ username: req.params.userid }, function(err, user) {
  if (err) throw err;

  // delete him
  user.remove(function(err) {
    if (err) throw err;

    console.log('User successfully deleted!');
  });
});
});


module.exports = router;
app.post('/userinsert/:userid/:password',function(req,res)
{
  var user=new User();
  user.username=req.params.userid;
  user.password=req.params.password;
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
app.delete('/userinsert/:userid',function(req,res,next)
{
  User=new User();

  User.find({ username: req.params.userid }, function(err, user) {
  if (err) throw err;

  // delete him
  user.remove(function(err) {
    if (err) throw err;

    console.log('User successfully deleted!');
  });
});
});
