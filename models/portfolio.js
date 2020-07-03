const mongoose = require('mongoose')

const Schema = mongoose.Schema

const portfolio = new Schema({
    portUmTitulo: {
        type: String,

    },
    portUmSubtitulo: {
        type: String
    },
    portUmOriginalName: {
        type: String
    },
    portUmFileName: {
        type: String
    },

    portDoisTitulo: {
        type: String,

    },
    portDoisSubtitulo: {
        type: String
    },
    portDoisOriginalName: {
        type: String
    },
    portDoisFileName: {
        type: String
    },

    portTresTitulo: {
        type: String,

    },
    portTresSubtitulo: {
        type: String
    },
    portTresOriginalName: {
        type: String
    },
    portTresFileName: {
        type: String
    },

    portQuatroTitulo: {
        type: String,

    },
    portQuatroSubtitulo: {
        type: String
    },
    portQuatroOriginalName: {
        type: String
    },
    portQuatroFileName: {
        type: String
    },

    portCincoTitulo: {
        type: String,

    },
    portCincoSubtitulo: {
        type: String
    },
    portCincoOriginalName: {
        type: String
    },
    portCincoFileName: {
        type: String
    },

    portSeisTitulo: {
        type: String,

    },
    portSeisSubtitulo: {
        type: String
    },
    portSeisOriginalName: {
        type: String
    },
    portSeisFileName: {
        type: String
    },
}, {
    timestamps: true,
})

mongoose.model('Portfolio', portfolio)