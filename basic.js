// console.log("writing first js");

// -->cls<-- is used for cleaning terminal.

// Since we are using -->var<-- for defining variables we can use typeof opeartor to discover type
// var name="Adnan";
// console.log(typeof(name));
// console.log(name);

// LOOKING at some casess

// console.log(10+"20");
// console.log(9-"5");
// console.log("Java"+"script");
// console.log(" "+" ");
// console.log(" "+0);
// console.log("Java"-"script");

// true returns 1, false returns 0
// console.log(true+true);
// console.log(true+false);
// console.log(true-false);
// console.log(false-true);

// //Difference between undefined and null;
// //null is value assigned when there is no value.
// // undefined is data type used when variable is not defined(we cannot make out it;s string,number or other)

// var name=null;
// console.log(name);
// var name2;
// console.log(name2);

//checking type of  
//null(says its object type which is a bug)
//undefined (says its data type which is true)

// var name=null;
// console.log(typeof(name)); //says->object
// var name2;
// console.log(typeof(name2)); //says->undefined datatype

//Learning about Nan(not a number)and it's use.

// var mynumber= 91683898;
// var myname="Adnan";
// console.log(isNaN(mynumber));
// console.log(isNaN(myname));

// //use
// if(isNaN(myname)){
//     console.log("enter a valid no");
// }

//CHALLENGE-3

// console.log(NaN===NaN);             //FALSE
// console.log(Number.NaN===NaN);       //FALSE
// console.log(isNaN(NaN));             //TRUE
// console.log(isNaN(Number.NaN));      //TRUE because Number.Nan is not necesarily a number always
// console.log(Number.isNaN(NaN));       // TRUE as NaN passed inside fn is not a number so returns true

//EXPRESSIONS AND OPERATORS
// var a=20;
// var b=20;
// console.log(a==b);//TRUE
// console.log("is a and b equal?:"+ a==b); // FALSE-As concatinated with a String
// console.log(`is a and b equal?: ${a == b}`); //TRUE-Resolves issue and concates the string
// console.log("is a and b not-equal?:"+ a!=b);

// //CHALLENGE-4 BASED ON OPERATORS
// console.log(3**3)// it's same as 3^3;
// console.log(5+"helloji"); //concatenation occurs


//DIFFERENCE BETWEEN == AND ===
//== Checks only value
//=== checks value and also datatype
// var a=5;
// var b='5';
// console.log(a==b); //TRUE
// console.log(a===b); //FALSE


//CONSITIONSAL STATEMENT

//USING if-else TO CHECK IF GIVEN YEAR IS LEAP
//div by 4, thn should be div y 100 thn should be div by 400->leap
//div by 4 but not div by 100 //leap
// var year=2020;
// if(year%4===0){
//     if(year%100===0){
//         if(year%400===0){
//         console.log(year+" is a leap year");
//         }
//         else{
//             console.log(year + " is Not leap year"); 
//         }
//     }
  
//     else{
//         console.log(year+" is a leap year");
//     }
    
// }
// else{
//     console.log("Not leap year");
        
// }

//FALSY VALUES -THOSE VALUES WHO ARE ALWAYS CONSIDER TO BE AS FALSE
//EG->0,undefined,null,NaN,false
var score=5;

//no other thn falsy value
// if(score==5){
//     console.log("wonnnnn");
// }
// else{
//     console.log("lossss");
// }

//using falsy value-0
// if(0){
//     console.log("wonnnnn");
// }
// else{
//     console.log("lossss");
// }

//using falsy value-undefined
// if(undefined){
//     console.log("wonnnnn");
// }
// else{
//     console.log("lossss");
// }

//using falsy value-null
// if(null){
//     console.log("wonnnnn");
// }
// else{
//     console.log("lossss");
// }

//using falsy value-NaN
// if(NaN){
//     console.log("wonnnnn");
// }
// else{
//     console.log("lossss");
// }

//TERNARY OPERATOR
var age=16;
if(age>=18){
    console.log("can vote");
}
else{
    console.log("cannot vote");
}

//USING TERNARY

var age=16;
console.log((age>=18)?"can vote":"cannot vote");

//SWITCH OPERATOR