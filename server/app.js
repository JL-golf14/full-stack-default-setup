var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var employeeRouter = require('./routes/employee');

//middleware
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/employee', employeeRouter);

app.listen(3000, function() {
  console.log('listening on 3000');
});
