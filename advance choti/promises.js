const promone=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("comp");
        resolve()
    },1000)
})
promone.then(function(){
    console.log("its done");

})
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('then pr 2');
        resolve()
    },1000)
}).then(function(){
    console.log("resolve");
})
const promthree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({user:'wasif',mail:'wasifpro'})

    },1000)
})
promthree.then(function(user){
    console.log(user);
})
const promfour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({user:"me",pass:"786"})
        }else{
            reject("error:user not found")
        }

    },1000)

})
const username =promfour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);

}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("done"))

const promfive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({user:"wasif",pass:"was"})
        }else{
            reject("error")
        }
        },1000)
    

})
async function consumpromfive(){
    try{
        const res=await promfive
        console.log(res);
    }catch (error){

    }
}
consumpromfive()

async function getall(){
    try{
        const res=await featch("")
    const data=await res.json()
    console.log(data);

    }catch(error){
        console.log('a',error)
    }
    
}
getall()
featch("")
.then((R)=>{
    return.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))

