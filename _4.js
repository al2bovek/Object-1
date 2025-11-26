// Write a program to get the length of a JavaScript object.
import keysArr from "./_3.js";
const student = { 
firstName: "John", 
lastName: "Smith", 
classs: 12 };
const engineerFromFrance = {...student};
delete engineerFromFrance.classs;
engineerFromFrance.age = 41;
engineerFromFrance.country = "France";
delete engineerFromFrance[keysArr.at(-1)];

const lengthJavaScriptObject = (obj) => {
  return Object.keys(obj).length;
}
console.log(lengthJavaScriptObject(engineerFromFrance));

