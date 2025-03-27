let score = "343a";

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
// "33" => 33
// "33abc" => NaN(not a number)
// "33.33" => 33.33
// true => 1; false => 0

let isLoggedIn = "1";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

// 1 = true
// 0 = false
// "" = false
// "0" = true
