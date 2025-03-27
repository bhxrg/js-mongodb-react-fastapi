var c = 300;

if (true) {
  let a = 10;
  const b = 20;
  console.log("INNER:", a);
}

console.log(c);

let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); //Accessible inside function
}

showGlobal();
console.log(globalVar); //Accessible outside function

//nested scope

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  console.log(website);

  two();
}

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = "youtube";
    console.log(username + website);
  }
  //   console.log(website);
}

// console.log(username);

function addone(num) {
  return num + 1;
}

addone(5);

const addTwo = function (num) {
  return num + 2;
};

addTwo(5);
