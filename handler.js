'use strict';
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports.hello = (event, context, callback) => {
	//console.log(event.genre);
	var Books = require("./model/books.js");
 context.callbackWaitsForEmptyEventLoop = false; 
	  mongoose.connect('mongodb://kuldeep:k%409540728130@cluster0-shard-00-00-m6oaf.mongodb.net:27017,cluster0-shard-00-01-m6oaf.mongodb.net:27017,cluster0-shard-00-02-m6oaf.mongodb.net:27017/bookengine?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')
	  .then(() =>  {
	  	 // let resp='';
			Books.find({"genre":event.genre})
			.then(books=>callback(null,{
			     statusCode: 200,
        body: JSON.stringify(books)
			}))
			.catch(err=>callback(null,{
				statusCode: err.statusCode || 500,
				 //headers: { 'Content-Type': 'text/plain' },
				 body: 'Could not fetch the books.'
			}));
	  //console.log(resp);
	 
	  	
	  })
	  .catch(err => callback(null,{
				statusCode: err.statusCode || 500,
				 //headers: { 'Content-Type': 'text/plain' },
				 body: err
			}));
};