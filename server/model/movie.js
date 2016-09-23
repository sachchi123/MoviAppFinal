var mongoose =require("mongoose");
var Schema=mongoose.Schema;
var movie=new Schema({
  Title:String,
  Year:String,
  Poster:String,
  imdbID:String
});
module.exports=mongoose.model('movies',movie);
