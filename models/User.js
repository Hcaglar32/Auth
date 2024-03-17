const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, default: null },
    email: { type: String, unique: true },
    email: { type: String },
    token: { type: String }
});

module.exports = model('User', userSchema);