
// importing express
const express= require('express');

// creating new router variable
const router = express.Router();

// getting home controller for the router
const myHabitsController = require('../controller/myHabitsController');

// calling controller for the home page
router.get('/',myHabitsController.home);

// route to change status on a task 
router.get('/toggle-status',myHabitsController.toggleStatus);

// exporting the router for outside use
module.exports = router;