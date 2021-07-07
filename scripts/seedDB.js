const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/bucketlistr'
);

const listItemSeed = [
    {
        title: "Visit Mexico",
        url: "https://www.visitmexico.com/en/",
        image: "client/images/tulum.jpg",
        date: new Date(Date.now())
    },
    {
        title: "See a San Jose Sharks game in Cali",
        url: "https://www.nhl.com/sharks",
        image: "client/images/SJsharks.jpg",
        date: new Date(Date.now())
    },
    {
        title: "Drive a Lamborghini",
        url: "https://www.thextremexperience.com/tracks/raceway-park-englishtown/",
        image: "client/images/lamborghini.webp",
        date: new Date(Date.now())
    },
];

db.ListItem.remove({})
    .then(() => db.ListItem.collection.insertMany(listItemSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });