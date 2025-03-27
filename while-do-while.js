// let index = 0;
// while (index <= 10) {
//   console.log(`Value of index is ${index}`);
//   index = index + 2;
// }

// let myArray = ["wonderwoman", "superman", "batman"];
// let arr = 0;
// while (arr < myArray.length) {
//   console.log(`Value is ${myArray[arr]}`);
//   arr++; //increment
// }

// //do-while

// let score = 1;

// do {
//   console.log(`Score is ${score}`);
//   score++;
// } while (score <= 10);

// // for of

// const arr1 = [1, 2, 3, 4, 5];

// for (const num of arr1) {
//   console.log(num);
// }

// const greetings = "hello world!";
// for (const greet of greetings) {
//   //console.log(`Each char is ${greet}`);
// }

// //maps

// const map = new Map();
// map.set("IN", "India");
// map.set("US", "United States");
// map.set("UK", "United Kingdom");

const myObject = {
  js: "javascript",
  py: "python",
  cpp: "c++",
  rb: "ruby",
};

for (const key in myObject) {
  //console.log(`${key} is ${myObject[key]}`);
}

const programming = ["js", "py", "cpp", "rb"];

for (const key in programming) {
  // for in gives index and for of gives values
  // console.log(key); //or can give programming[key] which gives the output
}

// programming.forEach(function (val) {
//   console.log(val);
// });

// programming.forEach((val) => {
//   console.log(val);
// });

// function printMe(item) {
//   console.log(item);
// }

// programming.forEach(printMe);

// const myCoding = [
//   {
//     languageName: "javascript",
//     languageFileName: "js",
//   },
//   {
//     languageName: "python",
//     languageFileName: "py",
//   },
//   {
//     languageName: "c++",
//     languageFileName: "cpp",
//   },
// ];

// myCoding.forEach((item) => {
//   console.log(item.languageFileName);
// });

const coding = ["js", "py", "cpp", "rb"];

const values = coding.forEach((item) => {
  console.log(item);
  return item;
});

console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);

const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

console.log(newNums);
