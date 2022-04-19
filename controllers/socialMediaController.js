const SocialPost = require('../libraries/SocialPost');
let myPost = new SocialPost()
    var currentPost = [{"title":"test","content":"someother"}]
    
const addPost = (req, res) => {
    console.log(req.query)
    let allPosts = myPost.addPost(req.query, currentPost)
    //currentPost.push({"title":req.query.title,"content":req.query.content})
    // console.log(allPosts);
    res.status(200);
    res.json({result:allPosts})
}
module.exports = {
    addPost
}