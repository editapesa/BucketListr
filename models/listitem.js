const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listitemSchema = new Schema({
    title: { type: String, required: true },
    url:  { type: String },
    image: { type: String },
    date: { type: Date, default: Date.now }
});

const ListItem = mongoose.model('ListItem', listitemSchema);

module.exports = ListItem;