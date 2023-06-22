var express = require("express");
var express-session = require("express-session");
var bodyParser = require("body-parser");
var app=express();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost/";

app.listen(8888, function(){console.log()"Server");});
app.use(express.static(__dirname));
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", function(req, res){
	res.render('profile');});
app.post("/login", function(err, db){
	var formusername = req.body.username;
	var formpassword = req.body.password;

	MongoClient.connect(url3, function(err) {
		if(err) {
			console.log('MongoDB connection failed!');
			throw err;
		}
		else {
			console.log('MongoDB connected succesfully');
			var dbo = db.db("earthcare");
			var dbuser = dbo.collection("users").findOne({username: username}, function(err1, res){
				//select * from users where username=provided_username
				if(err1){
					console.log('Error selecting document!');
					throw err1;
				}
				else{
					console.log('Document selected succesfully!');
				}
				db.close();
			});
		}
		if(dbuser){
			if(dbuser.name == formusername) {
				console.log('Username exists');
				if (dbuser.password == formpassword) {
					console.log('Authentication succesful');

					session=req.session;
					session.userid=req.body.username;
					console.log(req.session);  //create session for logged in user
					res.redirect(profile.html);
				}
				else {
					console.log('Wrong password');
				}
			}
		}
