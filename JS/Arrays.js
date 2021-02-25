"use strict";

// {

//     //spread Operator to deconsturct arrays  
//     const arr = [4, 5, 6];

//     const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
//     console.log(badNewArr);

//     const newArr = [1, 2, ...arr];
//     console.log(newArr);
//     console.log(...newArr);

//     // spread Operator to spread strings 
//     const str = "Jinkala";
//     const letters = [...str, "", ".s"];
//     console.log(letters);
//     console.log(...str);


//     // another using spread operator 



//     const ingredients = [prompt("what is ur main course?"),
//         prompt("what is ur next item sweet or hot ?"),
//         prompt("what is ur curry ?")
//     ];

//     console.log(ingredients);

// }

{
    //  REST PATTERN  AND PARAMETERS 



    //  const array1 = [1, 2, ...[3, 4, 5]];
    // const array1 = [1, 2, [3, 4, 5]];

    //  console.log(array1);

    //  const [a, b, ...restArray] = array1;
    //  console.log(a, b, restArray)

    //  console.log(...[1, 2, 3]);


    const add = function (...numbers) {
        let sum = 0;
        // const [...newArray] = [...numbers];
        console.log(numbers);
        console.log(numbers.length);
        for (let i = 0; i < numbers.length; i++) {
            console.log(numbers[i])
            sum += numbers[i];
        }
        console.log(sum);
        scroll
    }

    const add1 = function (a, b) {
        console.log(a, b);
    }
    //  add(2, 4, 6);

    // add(2, 6, 7, 9, 10);
    const add1arry = [1, 2];

    add1(...add1arry)

    //   const addArray = [[3,57,10],[2,4]];
    //   console.log(...addArray);
    //   add(addArray);
} {
    // && and ||  operator 

    console.log(3 || "jack");
    console.log("" || "jack");
    console.log(true || 0);
    console.log(undefined || null || 1);

    // Nullish  Operator 
    const noOfGuests = 0;
    const guests = noOfGuests || 10;
    console.log(guests);

    //const guestsCorrect = null ??  10 ;


} {
    // Looping through arrays 

    const cars = ["Saab", "Volvo", "BMW"];
    // console.log(cars);
    // console.log(...cars);

    // for (const item of cars) {
    //     console.log(item);
    // }


    console.log(cars.entries());
    console.log("entires array\n");

    console.log(...cars.entries());

    console.log("entires iterator \n");
    for (const item of cars.entries()) {

        console.log(item);
    }

    for (const [i, e] of cars.entries()) {
        // console.log(...item);
        console.log("Index " + i + "  " + "element " + e);
    }

    const [i, ...carsList] = ["Saab", "Volvo", "BMW"];
    console.log(i);
    console.log(carsList);
}
{
    // coding challenge 
}