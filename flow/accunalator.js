const mynum=[1,2,3,4]
const red = mynum.reduce(function(acc,curv){
    return acc + curv
},0)
console.log(red);
const m2 =mynum.reduce((acc,curv) => acc+curv,0)
console.log(m2);