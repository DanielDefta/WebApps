require('rootpath')();
var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('config.json');
var server = require('http').createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
//JWT aut gebruiken om te applicatie te beveiligen, moet doorgegeven worden in de header bij een request => custom-http zorgt dat dat gebeurd
//staandaar gebruiken alle routes die gegevens vragen aan databank een authorization 
//=> unless method (zorgt dat we toch bepaalde dingen kunnen sturen / opvragen => inloggen, registreren, password resetten enz)
app.use(expressJwt({
    secret: config.secret,
    getToken: function (req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return null;
    }
}).unless({ path: ['/users/authenticate', '/users/register', '/users/passwordrecover', '/users/checkanswers', '/users/resetpassword'] }));

// routes
app.use('/users', require('./controllers/users.controller'));
app.use('/bedrijf', require('./controllers/bedrijf.controller'));
app.use('/conversation', require('./controllers/conversation.controller'));

app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
  });
  
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
// start server
var port = process.env.PORT || 8080;
server.listen(port, function () {
    console.log('Server listening on port ' + port);
});