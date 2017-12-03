var config = require('../config/database');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.database, { native_parser: true });
db.bind('orders');
 
var service = {};
 
service.getAll = getAll;
service.getById = getById;
service.create = create;
/* service.update = update;
service.delete = _delete; */
 
module.exports = service;
 
function getAll() {
    var deferred = Q.defer();
 
    db.orders.find().toArray(function (err, orders) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        // return users (without hashed passwords)
        orders = _.map(orders, function (order) {
            return order;
        });
 
        deferred.resolve(orders);
    });
 
    return deferred.promise;
}
 
function getById(_id) {
    var deferred = Q.defer();
 
    db.orders.findById(_id, function (err, order) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        if (order) {
            // return user (without hashed password)
            deferred.resolve(order);
        } else {
            // user not found
            deferred.resolve();
        }
    });
 
    return deferred.promise;
}
 
function create(orderParam) {
    var deferred = Q.defer();

        // set user object to userParam without the cleartext password
        var order = orderParam;
        // add hashed password to user object
        //bedrijf.hash = bcrypt.hashSync(userParam.password, 10); 

        db.orders.insert(
            order,
            function (err, o) {
                if (err) deferred.reject(err.name + ': ' + err.message);
                deferred.resolve(order);
            });
 
    return deferred.promise;
}