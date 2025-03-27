const user = {
  username: "bhargavi",
  price: 1000,
  // this is function which refers to the current context
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
  },
};

user.welcomeMessage();

console.log(this);

// function chai() {
//   let username = "bhargavi";
//   console.log(this.username);
// }

// chai();

// const chai = function () {
//   let username = "Bhargavi ";
//   console.log(this.username);
// };

// chai();

const chai = () => {
  let username = "Bhargavi ";
  console.log(this.username);
};

chai();

const greet = () => {
  let greeting = "Hello";
  console.log(this.greeting);
};

greet();

const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(5, 7));
