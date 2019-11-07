const http = require('http');
const express = require('express');

const usersRouter = require('./routes/users');
const empresasRouter = require('./routes/empresas');

const app = express();

//CORS middleware
const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-Width, Content-Type, Accept, Access-Control-Allow-Method');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};

app.use(allowCrossDomain);

app.use(express.json());

app.use('/users', usersRouter);
app.use('/empresas', empresasRouter);

app.use('/', function(req, res) {
  res.send('Users api works');
});

const server = http.createServer(app);

const port = 8080;

server.listen(port);

console.debug('Server listening on port ' + port);

module.exports=app;