  let arr =["me","u",3]
console.log(arr[0]);
console.log(arr.length);
arr.push("tt")
console.log(arr);
arr.pop()
console.log(arr);
arr.unshift("in front ")
console.log(arr);
arr.shift()
console.log(arr);
console.log(arr.includes("me"));
console.log(arr.includes(9));
let rr = arr.join() //convert to string 
console.log(rr);
console.log(arr);
let diff = arr.slice(1,3)
console.log(arr);
 console.log("A",arr);
 let motdiff = arr.splice(1,3)
 console.log(motdiff);
 console.log("B",arr);

let no1 =[1,2,3,4,5,6]
let no2 = [7,8,9,0]
no1.push(no2)
let  no3 = no1.concat(no2)
console.log(no3);
//spred 
const b =[...no1,...no2]
console.log(b);
let merg = no1.flat(Infinity)
console.log(merg);