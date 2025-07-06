let mydate = new Date()
console.log(mydate.toString());
let me = new Date(2025,9,5)
console.log(me.toString());
let met = new Date("05-10-2006")
console.log(met.toLocaleString());
let stamp = Date.now()
let thi = stamp/1000
console.log(Math.round(thi));
let dam = new Date()
console.log(dam.getDay()+1);
console.log(dam.getMonth()+1);
dam.toLocaleString("default",{
    weekday:"long"
})