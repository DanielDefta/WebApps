
var express = require('express');
var router = express.Router();
var productService = require('../services/product.service');
 
// routes
router.post('/register', register);
router.get('/', getAll);
router.get('/:_id', getById);
 
module.exports = router;
 
function register(req, res) {
    productService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function getAll(req, res) {
    console.log("2");
    productService.getAll()
        .then(function (bedrijven) {
            res.send(bedrijven);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getById(req, res) {
    productService.getById(req.params._id)
        .then(function (bedrijf) {
            res.send(bedrijf);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}