const mongoose = require('mongoose')

const uniSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    alpha_two_code: {
        type: String,
        required: true
    },
    domains: [],
    country: {
        type: String,
        required: true
    },
    web_pages: [],
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('universities', uniSchema)