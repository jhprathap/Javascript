"use strict";

const family = {

    owner: "Jinkala",

    getMembers: function () {

        let a = 10;
        let b = 15;
        a = a + b;
        b = a - b;
        a = a - b;
        console.log("A :" + a + " B: " + b);

        return this.owner;
    },

    openingHours: {

        thu: {
            open: 12,
            close: 6
        },
        fri: {
            open: 12,
            close: 6
        },
        sat: {
            open: 12,
            close: 6
        }

    }
}
// console.log(family.getMembers());

// let objOpeningHours = family.openingHours;
// console.log(objOpeningHours);
// let objFri = objOpeningHours.fri;
// console.log(objFri);

const { owner , openingHours,getMember} = family ;
console.log(owner, openingHours );

let a = 10 ;
let b = 20 ;
const obj ={ a :1 , b:2 , c:3};
console.log(a, b);
console.log(obj.a, obj.b);
({a, b }= obj);

console.log(a, b );