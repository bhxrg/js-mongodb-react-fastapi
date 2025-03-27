//if statement
/*
if (condition) {
  //code to be executed if condition is true
}
*/
const isUserloggedIn = true;
if (isUserloggedIn) {
  console.log("User is logged in");
}

if (2 === "two") {
  //strict checking with "==="
  console.log("executed");
}

//<,>,<=,>=,=(assignment operator)
// ==(compare if both are same), !=(not equal),
// === (strictly equal), !==(not strictly equal)

//switch
const month = "mar";
//break breaks the control flow
switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("February");
    break;
  case "mar":
    console.log("March");
    break;
  case "apr":
    console.log("April");
    break;
  default:
    console.log("no match");
    break;
}

//false , 0, -0 "", null, undefined, NaN, BigInt On

//true , 'false',1, "0", " ", [ ], { }, Infinity, -Infinity, BigInt
