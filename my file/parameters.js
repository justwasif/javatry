//creat fuction 
// function my(){console.log("wasif");}
// my()
// function cal(no1,no2){console.log(no1+no2);}
// cal(10,12)
function user(username){
    if(username === undefined){
        console.log("entre username")
        return
    }
    return `${username} just logged in`; //backtick use karna hota hai single quote nahi
}
console.log(user());