
// import the mongoose
const mongoose=require('mongoose');


// defining schema
const HabitsSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    }
});

// compilling schema into a model 
const Habits = mongoose.model('Habits',HabitsSchema);

// exporting the schema 
module.exports = Habits;
