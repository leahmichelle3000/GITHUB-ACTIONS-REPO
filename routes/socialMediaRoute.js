var express = require('express');
var router = express.Router();

var socialMediaController = 
require('../controllers/socialMediaController')


router.get('/postContent', (req, res) => {
    console.log(req.query)
    var postContent = [{"title":"test","content":"something"}]
    res.send(postContent)
    })

module.exports = router;

