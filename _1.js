//  1. Write a program to list the properties of an object.
const student = { 
firstName: "John", 
lastName: "Smith", 
classs: 12 };
// const {firstName, lastName, classs} = student;
const listProperties = (obj) => {
  return Object.keys(obj);
}
console.log(listProperties(student));
