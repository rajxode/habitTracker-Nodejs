
// importing express
const express= require('express');

// creating new router variable
const router = express.Router();

// getting home controller for the router
const homeController = require('../controller/homeController');

// calling controller for the home page
router.get('/',homeController.home);

// exporting the router for outside use
module.exports = router;