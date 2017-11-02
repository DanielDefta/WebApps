var config = require('../config/database');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.database, { native_parser: true });
db.bind('producten');
 
var service = {};
 
service.getAll = getAll;
service.getById = getById;
service.create = create;
/* service.update = update;
service.delete = _delete; */
 
module.exports = service;
 
function getAll() {
    var deferred = Q.defer();
 
    db.producten.find().toArray(function (err, producten) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        // return users (without hashed passwords)
        producten = _.map(producten, function (product) {
            return product;
        });
 
        deferred.resolve(producten);
    });
 
    return deferred.promise;
}
 
function getById(_id) {
    var deferred = Q.defer();
 
    db.producten.findById(_id, function (err, product) {
        if (err) deferred.reject(err.name + ': ' + err.message);
 
        if (product) {
            // return user (without hashed password)
            deferred.resolve(product);
        } else {
            // user not found
            deferred.resolve();
        }
    });
 
    return deferred.promise;
}
 
function create(productParam) {
    var deferred = Q.defer();
    // validation
    db.producten.findOne(
        { artikelNr: productParam.artikelNr },
        function (err, product) {
            if (err) deferred.reject(err.name + ': ' + err.message);
 
            if (product) {
                // name already exists
                deferred.reject('artikelNr "' + productParam.artikelNr + '" is already taken');
            } else {
                createProduct();
            }
        });
 
    function createProduct() {
        // set user object to userParam without the cleartext password
        var product = productParam;
        // add hashed password to user object
        //bedrijf.hash = bcrypt.hashSync(userParam.password, 10); 

        db.producten.insert(
            product,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);
 
                deferred.resolve();
            });
    }
 
    return deferred.promise;
}