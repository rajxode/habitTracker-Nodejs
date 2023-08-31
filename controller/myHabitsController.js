
const Habits = require('../models/habits');

// to get list of all the days and dates in last week
const CalculateDayOfWeek = (date) => {
    // array storing all the dates and day
    var days = new Array();
    // storing values in asceding order of date
    for (var i = 6; i >= 0; i--){
        // store values in the form of string
        days[6-i] = new Date(date.getFullYear(), date.getMonth(), date.getDate() - i).toString();
        days[6-i] = `${days[6-i].slice(0,4)}, ${days[6-i].slice(4,15)}`;
    }
    // return the array of dates
    return days;
}


module.exports.home =async function(req,res){
    let date = new Date().toString();
    date =`${date.slice(0,3)},${date.slice(3,15)}`;
    const pastWeek = CalculateDayOfWeek(new Date());
    // rendering all the contacts stored inside the database
    const myHabits = await Habits.find({});

    return res.render('myHabits',{
        date:date,
        myHabits:myHabits,
        weekDays:pastWeek
    });
}


module.exports.toggleStatus = async function(req,res){
    let id = req.query.id;
    let index = req.query.i;
    let status = req.query.status;
    const user = await Habits.findOne({_id:id});
    user.weeklyStatus[index] = status;
    await user.save();
    return res.redirect('back');
}