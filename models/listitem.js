const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listitemSchema = new Schema({
    title: { type: String, required: true },
    url:  { type: String },
    image: { type: String },
    date: { type: Date, default: Date.now }
});

const ListItem = mongoose.model('ListItem', listitemSchema);

const listitemSchema = new Schema({
    title: { type: String, required: true },
    url:  { type: String },
    image: { type: String },
    date: { type: Date, default: Date.now }
});

const TaskList = mongoose.model('taskList', taskListSchema)

const listColumn = 

module.exports = ListItem;