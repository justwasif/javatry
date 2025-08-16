featch("")
.then((R)=>{
    return R.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))