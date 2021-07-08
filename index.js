//--------------------------------------VARIABLES---------------------------------------
var example = "this is a variable";

//--------------------------------------DATA TYPES--------------------------------------
var str = "string"; // ===> variable type STRING
var num = 15; // ===> variable type NUMBER
var bool = true; // ====> variable BOOLEAN (ps: can be true or false.)
var undefined; // ===> variable type undefined
null; // ===> type null

//--------------------------------------ARRAYS------------------------------------------
var arr = [2, 3, 4, 5, 6, 7, 8, 9];
var arr2 = [];

//--------------------------------------LOOPS-------------------------------------------
// while loop
var i = 0;

while (i < arr.length) {
  arr2.push(arr[i] * 2);
  i = i + 1;
}

console.table(arr2);

// for loop
for (var i = 0; i < arr.length; i++) {
  arr2.push(arr[i] * 2);
}

console.table(arr2);

//-----------------------------------lOGICAL OPERATORS----------------------------------
("== === && || != !==");

var a = "1";
var b = 1;

// console.log(a !== b);

//----------------------------CONDITIONAL STATMENTS--------------------------------------
//if
//else if
//else

if (time >= 5 && time <= 12) {
  console.log("good morning");
} else if (time >= 12 && time <= 20) {
  console.log("good afternoon");
} else {
  console.log("good night");
}

// -----------------------------------FUNCTION----------------------------------------------
let time = prompt("Insert your time : ");

function timeFunction() {
  if (time >= 5 && time <= 12) {
    return "good morning";
  } else if (time >= 12 && time <= 20) {
    return "good afternoon";
  } else {
    return "good night";
  }
}

console.log(timeFunction(13));
