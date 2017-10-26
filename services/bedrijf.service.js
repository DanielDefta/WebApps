var config = require('../config/database');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.database, { native_parser: true });
db.bind('bedrijven');
 
var service = {};
 
service.getAll = getAll;
service.getById = getById;
service.create = create;
/* service.update = update;
service.delete = _delete; */
 
module.exports = service;
 
function getAll() {
    var deferred = Q.defer();
 
    db.bedrijven.find().toArray(function (err, bedrijven) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        // return users (without hashed passwords)
        bedrijven = _.map(bedrijven, function (bedrijf) {
            return bedrijf;
        });
 
        deferred.resolve(bedrijven);
    });
 
    return deferred.promise;
}
 
function getById(_id) {
    var deferred = Q.defer();
 
    db.bedrijven.findById(_id, function (err, bedrijf) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        if (bedrijf) {
            // return user (without hashed password)
            deferred.resolve(bedrijf);
        } else {
            // user not found
            deferred.resolve();
        }
    });
 
    return deferred.promise;
}
 
function create(userParam) {
    var deferred = Q.defer();
    // validation
    db.bedrijven.findOne(
        { naam: userParam.naam },
        function (err, bedrijf) {
            if (err) deferred.reject(err.name + ': ' + err.message);
 
            if (bedrijf) {
                // name already exists
                deferred.reject('Name "' + userParam.naam + '" is already taken');
            } else {
                createBedrij();
            }
        });
 
    function createBedrij() {
        // set user object to userParam without the cleartext password
        var bedrijf = userParam;
        // add hashed password to user object
        //bedrijf.hash = bcrypt.hashSync(userParam.password, 10); 

        db.bedrijven.insert(
            bedrijf,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);
 
                deferred.resolve();
            });
    }
 
    return deferred.promise;
}
 
/* function update(_id, userParam) {
    var deferred = Q.defer();
 
    // validation
    db.users.findById(_id, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        if (user.username !== userParam.username) {
            // username has changed so check if the new username is already taken
            db.users.findOne(
                { username: userParam.username },
                function (err, user) {
                    if (err) deferred.reject(err.name + ': ' + err.message);
 
                    if (user) {
                        // username already exists
                        deferred.reject('Username "' + req.body.username + '" is already taken')
                    } else {
                        updateUser();
                    }
                });
        } else {
            updateUser();
        }
    });
 
    function updateUser() {
        // fields to update
        var set = {
            firstName: userParam.firstName,
            lastName: userParam.lastName,
            username: userParam.username,
        };
 
        // update password if it was entered
        if (userParam.password) {
            set.hash = bcrypt.hashSync(userParam.password, 10);
        }
 
        db.users.update(
            { _id: mongo.helper.toObjectID(_id) },
            { $set: set },
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);
 
                deferred.resolve();
            });
    }
 
    return deferred.promise;
}
 
function _delete(_id) {
    var deferred = Q.defer();
 
    db.users.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);
 
            deferred.resolve();
        });
 
    return deferred.promise;
} */