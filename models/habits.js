
// import the mongoose
const mongoose=require('mongoose');


// defining schema
const habitsSchema = new mongoose.Schema({
    // task name
    name:{
        type:String,
        require:true
    },
    // creation date
    createdAt:{
        type:String,
        require:true
    },
    // days on which the task is completed
    completedDays:{
        type:Number,
        require:true
    },
    // status of past week
    weeklyStatus:[
        {
            type:String,
            require:true
        },
    ],
});


// compilling schema into a model 
const Habits = mongoose.model('Habits',habitsSchema);


// exporting the schema 
module.exports = Habits;
