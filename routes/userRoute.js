const express = require('express');
const userController = require('../controller/userController.js');
const userAuth = require('../middleware/userAuth.js');
const router = express.Router();


router.get('/', userController.loginget);
router.get('/signup',userAuth,userController.signupget);
router.post('/signupVerify',userController.signupVerify);
router.post('/loginVerify',userController.loginVerify);
router.post('/logout',userController.userLogout);

module.exports = router;