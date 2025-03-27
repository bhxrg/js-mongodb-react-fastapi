// stack (primitive) and heap (non primitive)

let myNickName = "Burger";

let myAnotherNickName = "Bhar";

console.log(myAnotherNickName);

let userOne = {
  email: "username1@exple.com",
  upi: "user@vivo",
};

let userTwo = userOne;

(userTwo.email = "username2@google.com"), console.log(userOne.email); // Output: username2@google.com
console.log(userTwo.email);
