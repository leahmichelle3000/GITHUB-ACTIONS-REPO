var express = require('express');
var router = express.Router();

var calculatorController = 
require('../controllers/addController')

var multiplyController = 
require('../controllers/multiplyController')


// router.get('/add', (req, res) => {
//     console.log(req.query)
//     res.send(req.query)
//     })


router.get('/add', (req, res) => {
    // let number1=parseInt(req.query.num1);
    // let number2=parseInt(req.query.num2);
    // let sum=number1+number2
    // console.log(sum)
    // res.status(200)
    // res.json({result:sum})
    calculatorController.addNumbers(req,res)
})

    router.get('/multiply', (req, res) => {
        // let number1=parseInt(req.query.num1);
        // let number2=parseInt(req.query.num2);
        // let sum=number1*number2
        // console.log(sum)
        // res.status(200)
        // res.json({result:sum})
        multiplyController.multiplyNumbers(req,res)
    })

    

// Basic controller - slide 40
       

    
    // Basic controller - slide 40


    module.exports = router;

    
    