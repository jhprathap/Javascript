"use strict";
//console.log(this);


var calcAge = function (birthYear) {

    var lastName ="jinkala";
    console.log(2020 - 1979);
    console.log(this);
    var firstName ="Prathap" ;

    function calcAgeSub()
    {
        console.log("inside calcAgeSub");
    }  

    calcAgeSub();
}

// calcAge(1979);

// const calcAgeArrow = (birthyear) => {
//     console.log(2020 - birthyear);
//     console.log(this);
// }
// calcAgeArrow(1979);
{
 //   const firstName ="Hanuman";
}
//const firstName ="Jinkala" ;
//var firstName ="hanuman" ;

const jonas = {
    firstName: 'jack',
    year:1979,
    calcAge: function () {
        console.log(this);
        console.log(2020 - this.year);

    //    const millenia = function ()
    //    {
    //        console.log("Inside millenia: "+this);
    //    }

       const millenia =  () =>
       {
           console.log("Inside millenia: "+this.firstName);
       }
       millenia();
    },
    greet: () => 
    {
        console.log(` hey ${this.firstName}`)
    },
    hello: function() 
    {
        console.log(` hey from hello  ${this.firstName}`)
    },
};

//jonas.millenia();
jonas.calcAge();
 jonas.greet();
 jonas.hello();
// console.log(firstName);
//function  functConstParant()
// {
//     const firstName ="Hanuman";
//      var   lastName ="Jinkala" ;
//     // const functConst =function()
//     // {
//     //     console.log("inside the functConst:" +firstName);
//     //     console.log("inside the functConst"+this);
//     // }

//     const functConst = () => {
//         console.log("inside the functConst:" +firstName);
//         console.log("inside the functConst"+this.firstName);
//     }
    
    
//     functConst();
// }



// {
//     var variableVAR ="VARIABLE";
//     const constantCONST = "CONSTANT";
// }
// console.log(this.variableVAR);
// console.log(variableVAR);

// console.log(this.constantCONST);
// console.log(window.variableVAR);
// console.log(constantCONST);

//functConstParant()

// arguments 


 const argumentFunction = function (a , b)
 {

    console.log(arguments);
    for (let i =0 ; i<arguments.length ; i++)
    {
        console.log(arguments[i]);
    }

 }
 argumentFunction(5 , 6 ,7);