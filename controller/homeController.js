const Habits = require('../models/habits');


// rendering home page on website
module.exports.home= function(req,res){    
        // rendering homepage and posts
    return res.render('home');
}


// create a new Habit inside the database
module.exports.createHabit =async function(request,response){

    let date = new Date().toString();
    date =`${date.slice(4,15)}`;
    const weekStatus = Array(7).fill(null);
    
    // creating new element in mongodb
    const doc = Habits.create({
    // getting the value of name and phone
        name:request.body.name,
        createdAt:date,
        weeklyStatus:weekStatus,
        completedDays:0
    });
    return response.redirect('back');
};