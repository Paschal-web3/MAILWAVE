 const express = require('express');
const userCont = require('../controllers/userController');

const router = express.Router();

router.post('/users', userCont.createUser);

module.exports = router;

