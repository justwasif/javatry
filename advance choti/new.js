function user(name){
    this.name=name

}
function creat(name,mail){
    user.call(this.name)
    this.mail=mail
    
}
const print=new creat("ye","786")
console.log(print);
