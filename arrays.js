// const myArr = [1, 2, 3, 4, 5];
// const myHeroes = ["Iron Man", "Wonder Woman", "Thor", "Hulk"];
// const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr[0]);

// // methods

// // myArr.push(6);
// // myArr.pop();
// // myArr.unshift(9);
// // myArr.shift();
// // console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// console.log(myArr);
// // slice , splice

// console.log("A", myArr);

// console.log("B", myArr.slice(1, 3)); //includes 1, 2 and not three

// console.log("C", myArr.splice(1, 3)); // includes 1, 2, 3 and changes original array

let fruits = ["apple", "banana", "cherry", "orange", "date"];
// let slicedFruits = fruits.slice(1, 3);
let splicedFruits = fruits.splice(1, 3);
console.log("A", fruits);
// console.log("B", slicedFruits);
console.log("C", splicedFruits);
