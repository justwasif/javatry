let f = new Object()
// or {}
f.id = "786469"
f.name="wasif"
console.log(f);
//nesting
let nest = {email:"wasifpro100",fullname:{username:{firstname:"wasif"}}}
console.log(nest.fullname.username.firstname );
let joint = Object.assign({},f,nest) 
console.log(joint);
let sp ={...f,...nest}
console.log(nest.hasOwnProperty("email"));

