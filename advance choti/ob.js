function multi(num){
    return num*5
}
multi.power=2
console.log(multi(5));
console.log(multi.power);
console.log(multi.prototype);
function user(username,ssc){
    this.username = username
    this.ssc = ssc

}
user.prototype.inc=function(){
    ssc++
}
user.prototype.show=function(){
    console.log(`ssc is ${this.ssc}`);
}
const chai =new user("chai",25)
const tea =user("tea",230)
chai.show()

///dekho 
let name = "me"
console.log(name.length());
let mr=["thor","spider"]
let hero ={
    thor:"hammer",
    getpower:function(){
        console.log(`yo is ${this.thor}`);
    }
}
Object.prototype.we=function(){
    console.log(`he is present`);
}
hero.we()
Array.prototype.wewasif=function(){
    console.log(`yo oyoyo`);
}
