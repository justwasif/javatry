
// const const user ={

//     noname:"wasif",
//     login:8,
//     siggned:true,
//     getuser: function(){
//         console.log("detail");
//         console.log(`usernamw: ${this.noname}`);
//         console.log(this);
//     }
// }
// console.log(user.noname);
// console.log(user.getuser());
// const promiseo =new Promise()
// const da = new Date()

function user(noname,login,siggned){
    this.noname= noname;
    this.login=login;
    return this
}
this.yo=function(){
    console.log(`new ${this.noname}`);
}
const userone =user("wasif",8,true)
const usertwo=user("me",2,true)
/// ye 2nd vale ne sari values overwrite kar di 
console.log(userone.constructor);
