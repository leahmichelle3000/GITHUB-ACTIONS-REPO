class Logging {
    constructor() {
        this.id=Math.random()
    }

    #log=(value)=>{
        console.log(`[Logging:${this.id}]:${value}`)
    }
    add(error) {
        this.#log("There is an error")
        return value;
    }
    }
    
    module.exports=Logging