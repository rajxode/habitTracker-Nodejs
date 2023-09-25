
// getting Habits model for accessing the database
const Habits = require('../models/habits');


// to get list of all the days and dates in last week
const CalculateDayOfWeek = (date) => {
    // array storing all the dates and day
    var days = new Array();
    // storing values in asceding order of date
    for (var i = 6; i >= 0; i--){
        // store values in the form of string
        days[6-i] = new Date(date.getFullYear(), date.getMonth(), date.getDate() - i).toString();
        days[6-i] = `${days[6-i].slice(0,4)}, ${days[6-i].slice(4,11)}`;
    }
    // return the array of dates
    return days;
}


// render all the habits with weekly status
module.exports.home =async function(req,res){
    try {
        // today's date
        let date = new Date().toString();
        // getting only the date part
        date =`${date.slice(0,3)},${date.slice(3,15)}`;

        // days of past week
        const pastWeek = CalculateDayOfWeek(new Date());
        
        // getting all the habits from database
        const myHabits = await Habits.find({});

        // render all the habits 
        return res.render('myHabits',{
            // today's date
            date:date,
            // all habits
            myHabits:myHabits,
            // past week date
            weekDays:pastWeek
        });   

    } catch (error) {
        console.log(error);
        res.redirect('back');
    }
}


// for toggeling status of a habit on a specific day
module.exports.toggleStatus = async function(req,res){

    try{
        // getting id of habit
        let id = req.query.id;
        
        // index of week day
        let index = req.query.i;

        // new status of habit
        let status = req.query.status;

        // find the habit
        const habit = await Habits.findOne({_id:id});

        // if the new status is true (done)
        if(status === 'true'){
            // if task is not already done update the status
            if(habit.weeklyStatus[index] !== 'true'){

                // increase the number of days on which the task is completed
                habit.completedDays = habit.completedDays + 1;
            }
        }
        // if new status is not done / pending
        else{
            // if task was previously done
            if(habit.weeklyStatus[index] === 'true'){
                
                // reduce the number of day on which the habit is completed
                habit.completedDays = habit.completedDays - 1;
            }
        }

        // update the task's status
        habit.weeklyStatus[index] = status;

        // save the task inside the database
        await habit.save();

        // return resposne
        return res.redirect('back');
    }
    catch(err){
        // if error
        console.log(err.message);
        res.redirect('back');
    }
    
}