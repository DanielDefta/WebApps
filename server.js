
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const users = require('./controllers/users.controller');
const bedrijf = require('./controllers/bedrijf.controller');
const conversation = require('./controllers/conversation.controller');
const producten = require('./controllers/product.controller');
const order = require('./controllers/order.controller');

// Port Number: 1ste is voor development 2de voor prod en deployment
//const port =4000;
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);
app.use('/bedrijf', bedrijf);
app.use('/conversation',conversation);
app.use('/product', producten);
app.use('/order', order);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

io.on('connection', function(socket){

  socket.on('disconnect', function(){
    //hier gaan we de user offline zetten in de databank
    //pretty ugly code :)))
    var config = require('./config/database');
    var _ = require('lodash');
    var Q = require('q');
    var mongo = require('mongoskin');
    var db = mongo.db(config.database, { native_parser: true });
    db.bind('users');

    var deferred = Q.defer();
    var set = {
      online: false
    };
    db.users.update(
      { _id: mongo.helper.toObjectID(socket.client.id) },
      { $set: set },
      function (err, doc) {
        if (err) deferred.reject(err.name + ': ' + err.message);
          deferred.resolve();
      });
  });
  socket.on('online', (data)=>{
    //hier gaan we de user online zetten in de databank
    socket.client.id = data;
  })

   // Test Messages
  socket.on('send-message', (data) => {
    socket.broadcast.emit('message-received', data);
  });

});



// Start Server
server.listen(port, () => {
  console.log(__dirname);
  console.log('Server started on port '+port);
});
