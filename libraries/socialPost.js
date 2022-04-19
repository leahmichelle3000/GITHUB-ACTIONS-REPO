class SocialPost {
    constructor() {
        this.id=Date.now()
        //this.id=Math.random()
    }
    #log=(newPost)=>{
        console.log(`[Post:${this.id}]:${newPost}`)
    }
    addPost(newPost, allPostsUpToNow) {
        allPostsUpToNow.push(newPost);
         
        this.#log(newPost)
        return allPostsUpToNow;
    }
}
module.exports=SocialPost