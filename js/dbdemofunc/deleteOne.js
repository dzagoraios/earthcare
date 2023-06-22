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
		
		dbo.collection("collectionName").deleteOne(,{}, function(err1, res){ //Delete from table
		//dbo.collection("collectionName").deleteOne(,{column2: 22}, function(err1, res){  //delete from testtable where column2=22
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