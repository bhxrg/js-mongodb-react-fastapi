// //dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString());

// //time stamps

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

let newDate = new Date();
console.log(newDate);

newDate.toLocaleString("default", {
  weekday: "long",
});

console.log(newDate.getMonth());
