"use strict";

const orderSet = new Set(["pizza", "pasta", "pizza", "desert"])
console.log(orderSet);

console.log(new Set());

console.log(orderSet.size);
console.log(orderSet.has("pizza"));

orderSet.add("Garlic Bread");

orderSet.delete("desert");

const setEntries = orderSet.entries();
for(const i  of setEntries)
{
    console.log(i);
}
console.log(setEntries);

console.log("orderSet before destructuring\n");
console.log(orderSet);
console.log("\n");


console.log("orderSet after destructuring\n");

console.log(...orderSet);


for (const order of orderSet)
    console.log(order);


const staffUnique = [...orderSet];
console.log(...staffUnique);

// const staff = ["waiter","chef","waiter","Manager","chef","waiter"];
// const staffUnique = [...new Set(staff)];

// console.log(new Set(staff));
// console.log(staffUnique);
console.log(new Set[]);

