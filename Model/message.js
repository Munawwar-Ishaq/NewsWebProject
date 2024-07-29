const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: String,
    message: String,
    phone: String,
    email: String,
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
