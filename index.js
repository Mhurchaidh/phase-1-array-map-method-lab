const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  /////Used for testing logic, then converting into a map method/////
  // const tCasedNames = [];
  // for(let string of tutorials) {
  //   string = string.split(" ");
  //   for(let i = 0; i < string.length; i++) {
  //     string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
  //   }
  //   tCasedNames.push(string.join(" "));
  // }
  // return tCasedNames;
  /////

  const casedTitles = tutorials.map(str => {
    let string = str.split(" ");
    for(let i = 0; i < string.length; i++) {
          string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
        }
        return string.join(" ");
  })

  return casedTitles;
}
///// Using nested map method() /////
// const titleCased = () => tutorials.map(tutorial => {
//   const string = tutorial.split(" ");
//   const capWords = string.map(word => {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   })
//   return capWords.join(" ");
// })
/////