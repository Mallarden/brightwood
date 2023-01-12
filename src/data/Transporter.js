var express  = require('express');
var app      = express();
var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
 
var port     = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
 
app.listen(port);
console.log("App listening on port : " + port);
let transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
       user: 'userid',
       pass: 'pass'
    }
});