const express = require('express')
const userRoute = express()
const userController = require('../controllers/userController')

userRoute.get('/', userController.users)
userRoute.post('/create', userController.createUser)
userRoute.put('/delete', userController.deleteUser)




module.exports = userRoute