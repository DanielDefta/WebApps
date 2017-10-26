
var express = require('express');
var router = express.Router();
var bedrijfService = require('../services/bedrijf.service');
 
// routes
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:_id', getById);
 
module.exports = router;
 
function register(req, res) {
    bedrijfService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function getAll(req, res) {
    bedrijfService.getAll()
        .then(function (bedrijven) {
            res.send(bedrijven);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getById(req, res) {
    bedrijfService.getById(req.params._id)
        .then(function (bedrijf) {
            res.send(bedrijf);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}
 
function getCurrent(req, res) {
    bedrijfService.getById(req.user.sub)
        .then(function (bedrijf) {
            if (bedrijf) {
                res.send(bedrijf);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}