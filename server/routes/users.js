var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
