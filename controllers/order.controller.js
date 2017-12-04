var express = require('express');
var router = express.Router();
var orderService = require('../services/order.service');
 
// routes
router.post('/register', register);
router.get('/', getAll);
router.get('/:_id', getById);
router.put('/:_id', update);
router.delete('/:_id', _delete);
 
module.exports = router;
 
function register(req, res) {
    orderService.create(req.body)
        .then(function (order) {
            res.send(order);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function getAll(req, res) {
    orderService.getAll()
        .then(function (orders) {
            res.send(orders);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getById(req, res) {
    orderService.getById(req.params._id)
        .then(function (order) {
            res.send(order);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
    orderService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function _delete(req, res) {
    orderService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}