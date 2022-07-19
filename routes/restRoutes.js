const {addRestaurant,getRestaurant} = require('../controllers/restController')
const express = require('express')
const router = express.Router()

router.post('/addrest',addRestaurant)
router.get('/getrestaurant',getRestaurant)

module.exports = router