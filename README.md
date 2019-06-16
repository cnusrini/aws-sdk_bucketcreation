##### aws-sdk:
###### A simple sample in which html page interacts with aws-sdk to create an s3 bucket
##### how to test:
* git clone https://github.com/cnusrini/aws-sdk_bucketcreation.git
* cd aws-sdk_bucketcreation
* npm install
* configure your aws profile in AWS.config global object(this sample automatically takes the credentials from the local path. If you dont do it, this app will not work as expected )
* browse index.html
* provide the value in "Provide name of the bucket text box"
* hit submit button
* aws sdk will create the bucket on the fly
