
const Habits = require('../models/habits');


module.exports.home =async function(req,res){
    let date = new Date().toString();
    date =`${date.slice(0,3)},${date.slice(3,15)}`;

    // rendering all the contacts stored inside the database
    const myHabits = await Habits.find({});

    return res.render('myHabits',{
        date:date,
        myHabits:myHabits
    });
}