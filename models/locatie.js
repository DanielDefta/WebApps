const mongoose = require('mongoose');
const config = require('../config/database');


const LocatieSchema = mongoose.Schema({

});

const Locatie = module.exports = mongoose.model('Locatie', LocatieSchema);