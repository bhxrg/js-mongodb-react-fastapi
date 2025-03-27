function sayMyName() {
  console.log("My name is John");
}

sayMyName();

function addTwoNumbers(num1, num2) {
  console.log(num1 + num2);
}

addTwoNumbers(5, 7);

//const result = addTwoNumbers(5, 7);
// console.log(result); // This will throw an error because addTwoNumbers does not return anything

function loginUserMessage(username) {
  if (!username) {
    console.log("Please enter your username");
    return;
  }
  return `${username} is online`;
}

console.log(loginUserMessage("Bhargavi.K"));
// without parameter

function calPrice() {
  let price = 100;
  let discount = 20;
  let finalPrice = price - price * (discount / 100);
  console.log(finalPrice);
}

//parameter
//function calCartPrice(...num1) {
function calCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calCartPrice(200, 400, 500, 2000));

const user = {
  username: "Bhargavi",
  price: 200,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject(user);
