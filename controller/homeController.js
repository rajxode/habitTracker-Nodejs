const Habits = require('../models/habits');


// rendering home page on website
module.exports.home= function(req,res){    
        // rendering homepage and posts
    return res.render('home');
}


// create a new Habit inside the database
module.exports.createHabit =async function(request,response){
    
    // creating new element in mongodb
    const doc = Habits.create({
    // getting the value of name and phone
        name:request.body.name,
    });
    return response.redirect('back');
};