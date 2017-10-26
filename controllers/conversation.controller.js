
var express = require('express');
var router = express.Router();
var conversationService = require('../services/conversation.service');
 
// routes
router.post('/getbyusers', getByUsers);
router.post('/create', create);
router.put('/:_id', update);
router.get('/:_id', getById);
 
module.exports = router;
 
function create(req, res) {
    conversationService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getById(req, res) {
    conversationService.getById(req.params._id)
        .then(function (conversation) {
            res.send(bedrijf);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getByUsers(req, res) {
    conversationService.getByUsers(req.body.userId1, req.body.userId2)
        .then(function (conversation) {
            if(conversation){

                res.send(conversation);
            }
            else{
                conversationService.getByUsers(req.body.userId2, req.body.userId1)
                .then(function (conversation) {
                    if(conversation){
                        res.send(conversation);
                    }
                    else{
                        res.status(400).send('Username bestaat niet');
                    }
                })
                .catch(function (err) {
                    res.status(400).send(err);
                });
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
    conversationService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}