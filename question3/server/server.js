var express = require('express');
var bodyParser = require('body-parser');
 
var app = express();
 
app.use(bodyParser.json());
 
app.all('/*', function(req, res, next) {
  // CORS headers, restrict to supported domain
  res.header("Access-Control-Allow-Origin", "www.abc.com"); 
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // use access token and API keys
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  // accept CORS options
  if (req.method == 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
});
 
// version-ize API
// format /api/version/command/param
app.all('/api/1/*', [require('./middleware/validate')]);

// routing table
app.use('/', require('./route'));
 
// Return 404 for all other routes
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
 
// Start the server
app.set('port', process.env.PORT || 3000);
 
var server = app.listen(app.get('port'), function() {
  console.log('server listening on port ' + server.address().port);
});