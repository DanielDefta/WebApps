var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('conversations');
db.bind('users');

var service = {};

service.getByUsers = getByUsers;
service.create = create;
service.update = update;
service.getById = getById;

module.exports = service;

function getByUsers(userId1, userId2) {
    var deferred = Q.defer();

    db.conversations.findOne({ userId1: userId1, userId2: userId2 }, function (err, conversation) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (conversation) {
            deferred.resolve({
                _id: conversation._id,
                userId1 : conversation.userId1,
                userId2 : conversation.userId2,
                berichten : conversation.berichten
            });
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(conversationParam) {
    var deferred = Q.defer()
    var conversation = _.omit(conversationParam, ['user1', 'user2']);
    conversation.userId1 = conversationParam.user1._id;
    conversation.userId2 = conversationParam.user2._id;
    db.conversations.insert(
        conversation,
        function (err, doc) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}

function getById(_id){
    var deferred = Q.defer();
    
        db.conversations.findById(_id, function (err, conversation) {
            if (err) deferred.reject(err.name + ': ' + err.message);
    
            if (conversation) {
                deferred.resolve({
                    _id: conversation._id,
                    userId1 : conversation.userId1,
                    userId2 : conversation.userId2,
                    berichten : conversation.berichten
                });
            } else {
                deferred.resolve();
            }
        });
    
        return deferred.promise;
}

function update(_id, conversationParam){
    var deferred = Q.defer();
    var set = {
        userId1: conversationParam.userId1,
        userId2: conversationParam.userId2,
        berichten: conversationParam.berichten
    }

    db.conversations.update(
        {_id : mongo.helper.toObjectID(_id)},
        { $set: set},
        function (err, doc) {
            if (err) deferred.reject(err.name + ': ' + err.message);
            
            deferred.resolve();
        }
    );
    return deferred.promise;
}