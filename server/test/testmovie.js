var should = require("chai").should(),
supertest = require("supertest"),
app = require("../app");
var url = supertest("http://localhost:8080");

describe("Testing the first route", function(err){
  it("should handle the request", function(done){
    url
        .post("/movie/favmovie")
        .send({
          "Title":"abc",
          "Year":"123",
          "Poster":"qwe",
          "imdbID":"qww"
        })
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          res.text.should.be.equal("movie created");
          done();
        });
  });
});

describe("Testing the second route", function(err){
  it("should handle the request", function(done){
    url
        .delete("/movie/unfav")
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          res.text.should.be.equal("User deleted!");
          done();
        });
  });
});

describe("Testing the third route", function(err){
  it("should handle the request", function(done){
    url
        .put("/movie/update")
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          res.text.should.be.equal("User update!");
          done();
        });
  });
});

describe("Testing the fourth route", function(err){
  it("should handle the request", function(done){
    url
        .get("/movie/Fav")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
        var myObj = JSON.parse(res.text);
        myObj[0].Title.should.be.equal("Lagaan: Once Upon a Time in India");
        done();
        });
  });
});
