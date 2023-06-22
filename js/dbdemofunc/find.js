var MongoClient = require('mongodb') .MongoClient;
var url = "mongodb://dbuser:DGq5E0mUAHePIBC3@ac-clotdvk-shard-00-00.dmayoyc.mongodb.net:27017,ac-clotdvk-shard-00-01.dmayoyc.mongodb.net:27017,ac-clotdvk-shard-00-02.dmayoyc.mongodb.net:27017/?ssl=true&replicaSet=atlas-13rs4i-shard-0&authSource=admin&retryWrites=true&w=majority"; //DB URL
var url2 = "mongodb://dbuser:DGq5E0mUAHePIBC3@ac-clotdvk-shard-00-01.dmayoyc.mongodb.net:27017/?ssl=true&replicaSet=atlas-13rs4i-shard-0&authSource=admin&retryWrites=true&w=majority";
var url3 = "mongodb://localhost:27017";


var dbuser = "dbuser"  //DBuser for clusters  // not used
var dbpassword = "rzDVfLr9YVmAXWDB" //DBpassword for clusters  // not used

MongoClient.connect(url3, function(err) {
	if(err) {
		console.log('MongoDB connection failed!');
		throw err;
	}
	else {
		console.log('MongoDB connected succesfully');
		var dbo = db.db("earthcare");
		dbo.collection("collectionName").find({}).toArray(function(err1, res){
		//dbo.collection("collectionName").find({field:data}).toArray(function(err1, res){			//select * where 
		//dbo.collection("collectionName").find({},{table:{field:data}}.toArray(function(err1, res){  // select column2 from table
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
});