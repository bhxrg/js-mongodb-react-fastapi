// let value = 3;
// ("use strict");
// let negValue = -value;
// console.log(2 > 1);
// console.log("2" > 1);
let str1 = "ftft";
let str2 = "gghgh";
let str3 = str1 + str2;
console.log(str3);

//===

console.log("2" === 2);

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

//array objs, fns

const heroes = ["wonderwoman", "superman", "batman"];
let myObj = {
  name: "blacknight",
  age: 30,
};

const myFunction = function () {
  console.log("Hello World");
};

console.log(typeof myFunction);
