const { signUp, signIn } = require('../controller/User.controller')
const { signUpValidation, signInValidation } = require('../validation/User.validation')


const router = require('express').Router()

router.post('/user/signUp',signUpValidation,signUp)
router.post('/user/signIn',signInValidation,signIn)
router.post('/user/auth',(req,res)=>{
    res.status(200).json('Login')
})


module.exports =router