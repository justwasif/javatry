// class me{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }
// }
// chanusername(){
//     return`${this.username.toUpperCase()}`
// }
// encryptpassword(){
//     return `${this.password}`

// }
class me{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
}
// chanusername(){
//     return`${this.username.toUpperCase()}`
// }
// encryptpassword(){
//     return `${this.password}`

// }

me.prototype.encryptpassword=function(){
    return`${this.password}`
}
me.prototype.chanusername=function(){
    return`${this.username}`
}
const ye=new me("wasif","@7856","1212")
console.log(ye.encryptpassword());
console.log(ye.chanusername());
