const mongoose = require('mongoose')

const Schema = mongoose.Schema

const home = new Schema({
    topTitulo: {
        type: String,

    },
    topSubtitulo: {
        type: String
    },
    topTextoBtn: {
        type: String
    },
    topLinkBtn: {
        type: String
    }
},{
    timestamps: true,
})

mongoose.model('Home', home)