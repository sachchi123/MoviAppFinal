var express = require('express');
var app = express.Router();
var Movie2=require('../model/movie');
/* GET home page. */
/*
  This method is used for posting the movies in Favourite List.
*/
app.post('/favmovie',function(req,res)
{
 console.log(req.body);
 var mov=new Movie2();
 mov.Title=req.body.Title;
 mov.Year=req.body.Year;
 mov.Poster=req.body.Poster;
 mov.imdbID=req.body.imdbID;
 mov.save(function(err){
   if(err){
     res.send(err);
   }
   else
     {
       console.log("Movies are posted on Favorite list!!!!");
       res.send('movie created');
     }

 });
});
/*
  This method is used for displaying the movies from Favourite List.
*/
app.get('/Fav',function(req,res,next)
{
 Movie2.find({},function(err,docs){
    console.log("Movies are displayed from Favorite list!!!!");
   res.json(docs);
 });
});

/*
  This method is used for deleting the movies from Favourite List.
*/
app.delete('/unfav',function(req,res,next)
{
Movie2.findOneAndRemove({ Year: req.body.Year }, function(err) {
 if (err) throw err;
 console.log("Movies are deleted from Favorite list!!!!@@@@@@@");
 res.send('User deleted!');
});
});

/*
  This method is used for updating the movies to Favourite List.
*/
app.put('/update',function(req,res,next)
{
Movie2.findOneAndUpdate({imdbID: req.body.imdbID }, { Title: req.body.t}, function(err, user) {
 if (err) throw err;
console.log("Movies are updated into Favorite list!!!!");
res.send('User update!');
});
});

module.exports = app;
