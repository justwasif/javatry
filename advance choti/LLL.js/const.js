class me{
    constructor(username){
        this.username=username
    }
    log(){
    console.log(`username is ${this.username}`);
    }
}
class teacher extends me {
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    add(){
        console.log(`a new ${this.username}`);
    }
}
const chai =teacher("wasif","@","2121")
chai.add()
const tea=new me("wasif")
tea.log()
console.log(chai instanceof me);
