// ! Regex - regular rexpression

let regex;
regex = /hello/;

// console.log(regex);
// console.log(regex.source);

// ? exec - return result array or null if not found

let result = regex.exec("ala hello");
// console.log(result);

// ? test - return boolean if found
let result2 = regex.test("al hello");
// console.log(result2);

regex = /hello/i; //i - flag for case insensitive

// /hello/g - global flag iesko iki pabaigos

// ? String methods
// ? match - returns result array or null if not found

// let stringResult = "testinis stringas Hello".match(regex);
// console.log(stringResult);

// ? search - returns index of first match or -1

// let stringResult = "testinis stringas Hello".search(regex);
// console.log(stringResult);

// ? replace - returns new string with replaced parts

let stringResult = "testinis stringas Hello".replace(regex, "good night");
// console.log(stringResult);

// ! more advanced regex

let regExp = /hello/;
regExp = /^hello/; //must start with that sequence
regExp = /hello$/; //must end with that sequence
regExp = /^hello$/; //must match exact sequence
regExp = /he.lo/; //matches any one character
regExp = /h*o/; //matches 0 or more times any character (svarbu kad prasidetu tais simboliais tarp zvaigzdutes)
regExp = /gre?a?y/; // optional character(might be or not)
regExp = /gre?a?y\?/; // "\" - escape character

// ? [] - characters sets
regExp = /gr[ae]y/; //one from brackets must exist (e.g. 'a' or 'e')
regExp = /[^GR]lay/; //matches anything but not 'G' and 'R'
regExp = /[A-Z]/; //matches all uppercase in the start of sequence
regExp = /[A-Za-z]/; //matches all uppercase and lowercase in the start of sequence

// ? {} - quantifiers
regExp = /hel{2}o/; //two times 'l'
regExp = /hel{2,4}o/; //two or for times 'l'

// ? () - grouping
regExp = /([0-9]a){2}/; //grouping for result '5a5a'

const email = "labas@du.lt";
const simpleEmailRegex = /^[a-z0-9]*@[a-z]\.[a-z]{2,3}$/i; //email validavimas
