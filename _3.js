// 3. Write a JavaScript program to delete the "class" property (or last property) from the previous object.
const student = { 
firstName: "John", 
lastName: "Smith", 
classs: 12 };
const engineerFromFrance = {...student};
delete engineerFromFrance.classs;
engineerFromFrance.age = 41;
engineerFromFrance.country = "France";
const {firstName, lastName, age, country} = engineerFromFrance;
const engineerFromFranceKeys = Object.keys(engineerFromFrance);
delete engineerFromFrance[engineerFromFranceKeys.at(-1)];
const listProperties = () => {
  return `${firstName} ${lastName} is a ${age} year old engineer living in ${country}`;
}
console.log(listProperties(engineerFromFrance));
console.log(engineerFromFrance);

export default engineerFromFranceKeys;
