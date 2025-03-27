let res = "hello " + "\n" + "World";
console.log(res); // "helloWorld"

const nname = "bhar";
const repoCount = 51;

//console.log(nname + repoCount + " Value");
console.log(`Hello my name is ${nname} and my repoCount is ${repoCount}`);

const gameName = new String("bhargavi");

console.log(gameName);
console.log(gameName[3]);

console.log(gameName[1]);
console.log(gameName[2]);
const myNme = gameName.toLocaleLowerCase();
console.log(myNme);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("r"));
const gameName2 = gameName.substring(0, 4);
console.log(gameName2);

const gameName3 = gameName.slice(-8, 4);
console.log(gameName3);

console.log(gameName.length);

const gameName4 = gameName.split("");
console.log(gameName4);

const newString = "   bhargavi      ";
console.log(newString);
console.log(newString.trim());

const url = "https://github.com/bhxrg";

console.log(url.replace("x", "a"));

console.log(url.includes("bhargavi"));

console.log(gameName.split("-"));
