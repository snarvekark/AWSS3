var express = require('express');
var app = express();
const AWS = require('aws-sdk/global');
var fs = require('fs');
const S3 = require('aws-sdk/clients/s3');

require('dotenv').config();

AWS.config.update({ accessKeyId: process.env.AWSAccessKeyId, secretAccessKey: process.env.AWSSecretKey, region: 'us-west-2' });
const s3 = new AWS.S3();

const params = {
  Bucket: '281bucketf',
  Delimiter: '',
  Prefix: ''
};
  var filedata = '';
  //app.post('/', function (req, res) {
    s3.listObjectsV2(params, (err, data) => {
    if (err) throw err;
    filedata = data.Contents;
    console.log(data.Contents);
   })
    //res.send(filedata);
  //})

  //app.listen(3001);