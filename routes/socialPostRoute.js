const { response } = require('express');
var express = require('express');
var router = express.Router();
require('../controllers/socialMediaController')



router.post('/createNewPost', (req,res) => {
    res.send(JSON.stringify(req.body, null, 2));
    var fs = require('fs');
    fs.readFile('socialContent.json', 'utf8', function readFileCallback(err, data){
      if (err){
          console.log(err);
      } else {
          obj = JSON.parse(data);
          obj.socialContent.push({"title": req.body.title, "comment": req.body.comment})
          json = JSON.stringify(obj);
          console.log(json);
          fs.writeFile('socialContent.json', json, 'utf8', function(err) {
              if(err) {throw err};
              res.send("success")
          })
      }
  });
});

// get existing posts
router.post('/getPosts', (req, res) => {
    res.send(JSON.stringify(req,body, null, 2));
    console.log(req.body)
    // var postContent = [{"title":"test","content":"something"}]
    res.send(postContent)
    })

    var fs = require('fs');

    fs.readFile('socialContent.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            obj = JSON.parse(data);
            obj.socialContent.push({"title": req.body.title, "article": req.body.comment})
            json = JSON.stringify(obj);
            console.log(json);
            
    fs.writeFile('socialContent.json', json, 'utf8', function(err) {
                if(err) {throw err};
                res.send("success")
            })
        }
    });

// add a new post
router.get('/postContent', (req, res) => {
    console.log(req.query)
    var postContent = [{"title":"test","content":"something"}]
    res.send(postContent)
    })

module.exports = router;

