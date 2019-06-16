//Import gLobal variable object
var AWS = require('aws-sdk');
// Import the Amazon S3 service client
var S3 = require('aws-sdk/clients/s3');


function bucketName(){
var providedname = document.getElementById('bucketname').value;
var awsbucketName = providedname + Math.random();
console.log('awsbucketName',awsbucketName);
var bucketobname = 'hellow_world.txt'

// Initialize the Amazon Cognito credentials provider


AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:d75db41c-80cf-4aba-9de0-e37d32a4929e',
});

var apiVersion = {apiVersion: '2006-03-01'};
var bucketpromise = new AWS.S3(apiVersion).createBucket({Bucket: awsbucketName}).promise();
bucketpromise.then(function(sucess){
  var putObj = {Bucket:awsbucketName,Key:bucketobname,Body:'hello from UI'};
  console.log('putObj before',putObj);
  var putPromise = new AWS.S3(apiVersion).putObject(putObj).promise();

  putPromise.then(function(){
    //var awsbucketobj = awsbucketName + "/" + bucketobname;
    document.getElementById('yourbucketname').innerHtml = awsbucketName;

  });

}).catch(function(err){
  console.error(err, err.stack);
});
//console.log('bucketpromise',bucketpromise);
 return awsbucketName;
}

//bucketName();

//console.log('aws', AWS);
