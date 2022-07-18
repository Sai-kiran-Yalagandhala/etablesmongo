const userController = require('../controllers/userController')
const express = require('express')
const router = express.Router()

router.post('/adduser',userController.addUser)

module.exports = router