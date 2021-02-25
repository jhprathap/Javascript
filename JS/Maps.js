"use strict"; 
const rest = new Map();
rest.set("name", "Classical Italiono");

console.log(rest);

for(const [key,value] of rest.entries())
 console.log(key+":"+value);