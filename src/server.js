
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

// attach body parser for app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,

}));

// declare and set the routes
app.use('/', require('./routes')(express));
exports.server = app.listen(port,() => {
  console.log('Server Active On', port);

});
