// 2. Create a person object. Include the person's first and last name, age, job, city etc. Then print text by retrieving data from the object e.g. "John Smith is a 41 year old engineer living in France". 

const student = { 
firstName: "John", 
lastName: "Smith", 
classs: 12 };
const engineerFromFrance = {...student};
delete engineerFromFrance.classs;
engineerFromFrance.age = 41;
engineerFromFrance.country = "France";
const {firstName, lastName, age, country} = engineerFromFrance;
const listProperties = () => {
  return `${firstName} ${lastName} is a ${age} year old engineer living in ${country}`;
}
console.log(listProperties(engineerFromFrance));

