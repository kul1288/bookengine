'use strict';

module.exports.hello = (event, context, callback) => {
	var aws = require('aws-sdk');
		var lambda = new aws.Lambda({
		  region: 'us-west-2' //change to your region
		});

		lambda.invoke({
		  FunctionName: 'run-scraper',
		  Payload: JSON.stringify(event, null, 'art') // pass params
		}, function(error, data) {
		  if (error) {
			context.done('error', error);
		  }
		  if(data.Payload){
		   context.succeed(data.Payload)
		  }
		});
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
