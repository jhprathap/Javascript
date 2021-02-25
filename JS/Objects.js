"use strict";

const hours = {

    thur: {
        open: 10,
        close: 5,
        getHours: function () {
            //  const objFri = this.fri ;
            console.log(this.close);
        }
    },
    fri: {
        open: 10,
        close: "9pm",
        fridayHours: 10,
        getClosehours() {
            return this.fridayHours;
        }
    },
    sat: {
        open: 10,
        close: 5
    },

    getHoursMain: function () {
        console.log(this);
        console.log(this.thur.getHours());
        //  console.log(thur);
        //   const friHours = thur.getHours();

    }
}

console.log(hours.fri.getClosehours());
//console.log(hours.getHoursMain());


// Object Keys 
const objKeys = Object.keys(hours);
console.log(objKeys.length);

for (const key of objKeys) {
    console.log(key);
}

// Object values 

const objValues = Object.values(hours);
for (const value of objValues) {
    console.log(value);
}
// Object entries

const entries = Object.entries(hours);
console.log(...entries);
console.log("Printing the values of entries");
for (const [key, {
        open,
        close
    }] of entries) {
    console.log(key + " :" + close + " :" + open);
}


const odds = {
    //  team1:10, 
    //  team2 :20,
    team3: {
        value1: "one",
        value2: "two"
    },
    team2: {
        value1: "one",
        value2: "two"
    }
}
console.log(odds);
console.log(Object.entries(odds));
for(const [ t , {value1 ,value2}]  of Object.entries(odds))
{
  console.log(t+":"+value1 + ":"+value2);
}