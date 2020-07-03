const mongoose = require('mongoose')

const Schema = mongoose.Schema

const services = new Schema({
    serUmTitulo: {
        type: String,
    },
    serUmDesc: {
        type: String
    },
    serUmIcon: {
        type: String
    },
    serDoisTitulo: {
        type: String,
    },
    serDoisDesc: {
        type: String
    },
    serDoisIcon: {
        type: String
    },
    serTresTitulo: {
        type: String,
    },
    serTresDesc: {
        type: String
    },
    serTresIcon: {
        type: String
    },

}, {
    timestamps: true,
})

mongoose.model('Services', services)