function load() {
    var body = document.getElementsByTagName("body")[0].style;
    body.backgroundColor = "blue";

}
var varE = " variable E at global level";

function strictMode() {
    // "use strict" ;
    let hasDriversLicense = false;
    const passedTest = true;

    if (passedTest) hasDriverLicense = true;
    if (hasDriversLicense) console.log("he can drive");
}


// let firstName = "Prathap" ;

//  const printName =`I'am  ${firstName}`;
//  console.log(printName);
//  console.log(`Just  regular string`);

{
    //function expression
    const fun1 = function (year) {
        return 2020 - year;
    }
    const age = fun1(1979)
    console.log("age:" + `${age}`);
}

function childAge(childDob) {
    return 2020 - childDob;
}

{
    // function expresion Arrow function 
    const arrowFunct = birthYear => 2020 - 1979;

    const fatherAge = arrowFunct(1979);
    let ageofChild = "";
    let ageDiffWithParent = "";
    console.log("ArrowFunctDemo: " + "FatherAge: " + `${fatherAge}`);

    // const arrowFunct1 = childDob => {
    //     return 2020 - childDob;
    // }  s
    const arrowFunct1 = birthYear => childAge(birthYear);

    ageofChild = arrowFunct1(2011);
    console.log("ArrowFunct1Demo " + "ChildsAge:" + `${ageofChild}`);

    const affowFunct2 = function () {
        ageDiffWithParent = fatherAge - ageofChild;
    }
    affowFunct2();
    console.log("ArrowFunct2Demo " + "ageDiffWithParent:" + `${ageDiffWithParent}`);
}

{
    // Arrray transformed to string , separated by ... 
    function evenListenerExa() {
        document.querySelector("#button").
        addEventListener("click", function () {

            const number = document.querySelector("#number").value;
            if (parseInt(number)) {
                console.log("no number entered");
            } else {
                console.log("inside else block");
            }

        });
    }

    scopeExa();

    function scopeExa() {
        let varA = 10;
        var varB = "variableB";

        //innerScopeExam();
        if (true) {
            var varC = "variableC";
            let varD = 20;

            //  innerScopeExam();
            function innerScopeExam() {

                console.log("inside the function innerScopeExam");
            }

        }
        console.table("varA:" + varA);
        console.table("varB:" + varB);
        console.table("varC:" + varC);
        //  console.table("varD:"+varD);

        console.table("varE:" + varE);

    }

    'use strict';
    // call testSTDZ
    testSTDZ();
    // 
    function testSTDZ() {
        const myName = "jack";
        console.log("this value :"+this);
        if (myName === "jack") {
            //  console.log(`jack is a${job}`);
            const age = 2020 - 1979;
            console.log((age));
            const job = "SoftwareEnginner";
           // console.log(x);

        }
    }

}
