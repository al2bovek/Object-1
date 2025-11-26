// Write a program to display the reading status (i.e. display book name, author name and reading status) of the following books.

const library = [
  {
    author: 'J.K. Rowling',
    title: 'Harry Potter and the Chamber of Secrets',
    readingStatus: true
  },
  {
    author: 'Homer',
    title: 'The Odyssey',
    readingStatus: true
  },
  {
    author: 'Harper Lee',
    title: 'To Kill a Mockingbird',
    readingStatus: false
  }];

const readingStatus = (obj) => {
  const read = "Already read";
  const needRead = "You still need to read";
  // const status = [];
  // obj.forEach(element => {
  //   const {author, title, readingStatus} = element
  //   readingStatus ? status.push(`${read} ${title} by ${author}`) : status.push(`${needRead} ${title} by ${author}`);
  // });

 const status = {};
  obj.forEach((element, index) => {
    const {author, title, readingStatus} = element;
    index += 1;
    readingStatus ? status[index] = (`${read} ${title} by ${author}`) : status[index] = (`${needRead} ${title} by ${author}`);
  });
  return status;
}
console.log(readingStatus(library));
