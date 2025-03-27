// const JsUser = {
//   name: "Bhargavi K",
//   age: 20,
//   occupation: "Software Developer",
//   location: "Bangalore",
//   email: "bhargavi.k@gmail.com",
//   isLoggedIn: true,
//   lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
// };

// console.log(JsUser);
// console.log(JsUser.age);

// const mySym = Symbol("key1");
// const JsUser = {
//   name: "Bhargavi K",
//   age: 20,
//   [mySym]: "mykey1",
//   occupation: "Software Developer",
//   location: "Bangalore",
//   email: "bhargavi.k@gmail.com",
//   isLoggedIn: true,
//   lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
// };

// JsUser.email = "kbhargavi@gmail.com";
// Object.freeze(JsUser);
// JsUser.email = "bhargavi.k1503@gmail.com";
// console.log(JsUser);

// JsUser.greeting = function () {
//   console.log("Hello, I am Bhargavi K");
// };

// console.log(JsUser.greeting);

// singleton(using constructor)

// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Bhargavi K";
tinderUser.age = 20;
tinderUser.occupation = "PD Intern";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser = {
  email: "bhargavi.k@gmail.com",
  fullname: {
    userfullname: {
      first: "Bhargavi",
      last: "K",
    },
  },
};

console.log(regularUser.fullname.userfullname.first);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 4: "d", 5: "e" };

const obj3 = Object.assign({}, obj1, obj2);

console.log(obj3);

const users = [
  {
    id: 1,
    name: "Bhargavi K",
    age: 20,
  },
  {
    id: 2,
    name: "Bhargav A",
    age: 22,
  },
  {
    id: 3,
    name: "Sahana N",
    age: 19,
  },
];

users[1].age;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));

const course = {
  coursename: "JavaScript",
  coursecode: "JS-101",
  coursefee: 5000.0,
  courseDuration: 30,
};

// course.courseInstructor
// code destructure
const { coursecode: code } = course;

console.log(code);

// const studDet = {
//   studentid: 1,
//   studentname: "Bhargavi K",
//   studentage: 20,
// };
