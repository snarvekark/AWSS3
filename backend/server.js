try{
  var express = require('express');
  var bodyParser = require('body-parser');
  var cors = require('cors');

}catch(error){
  console.error("ERROR");
  console.log(error);
  process.exit(1);
}


var port = 3001;


var app = express(); 

app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var s3sign = require('./s3sign');

app.use('/s3sign', s3sign.s3sign);

app.listen(port);

console.log("Server is runing at port :" + port )