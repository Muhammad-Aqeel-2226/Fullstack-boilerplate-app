//-----------------------------------------
// Sample of authRouter
//-----------------------------------------

const express = require('express');
const authRouter = express.Router();
const authController = require('../controllers/authController');

// POST /api/auth/register
authRouter.post('/register', authController.register);

// POST /api/auth/login
authRouter.post('/login', authController.login);

module.exports = authRouter;
