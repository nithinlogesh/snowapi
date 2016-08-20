

var express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');



app.use(bodyParser());
app.use(methodOverride());



//Connect to mongodb
//mongoose.connect('mongodb://localhost/cloudsnow', function(err){
mongoose.connect('mongodb://calibertreem:calibertreem@52.39.209.42:27017/cloudsnow', function(err){

  if(err){
    return console.log(err);
  }
  return console.log("Successfully connected to mongoDB");
  return console.log("port 2555");
});


//MongoDB schemaaaa

var Schema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: {type: String},
    firstname: String,
    lastname: String
});

var user = mongoose.model('members', Schema);


//Register API route

app.post('/registerr',function(req,res){


    var username = req.body.username;
	var password = req.body.password;
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;

	var newuser = new user();
	newuser.username = username;
	newuser.password = password;
	newuser.firstname = firstname;
	newuser.lastname = lastname;

	newuser.save(function(err, savedUser){
		if(err){
			console.log(err);
			return res.status(500).send();

		}
		return res.status(200).send();
	})

})









app.listen(8080);

console.log("Server running on port 8080");
