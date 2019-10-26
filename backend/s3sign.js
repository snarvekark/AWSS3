var aws = require('aws-sdk');
require('dotenv').config(); 
aws.config.update({
  region: 'us-west-2', 
  accessKeyId: process.env.AWSAccessKeyId,
  secretAccessKey: process.env.AWSSecretKey
})

const S3_BUCKET = process.env.bucket

exports.s3sign = (req,res) => {
  const s3 = new aws.S3();  
  const fileName = req.body.fileName;
  const fileType = req.body.fileType; 
// Send to S3 bucket
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 50,
    ContentType: fileType,
    ACL: 'public-read'
  };
// Get Url
s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      res.json({success: false, error: err})
    }
    // Return data
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    res.json({success:true, data:{returnData}});
  });
}