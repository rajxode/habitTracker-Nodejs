// importing mongoose
const mongoose = require('mongoose');

const { MONGODB_URL} = process.env;

// catching errors
main().catch(err => console.log(err));

// firing up the database
async function main() {
    await mongoose.connect(MONGODB_URL);
    console.log('DataBase setup');
}