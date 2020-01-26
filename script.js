/**** Implemeting the filter() function ****/
function each(collection, func) {
  if(Array.isArray(collection)) {
    for(let i = 0; i < collection.length; i++) {
      func(collection[i], i);
    }
      
  }else {
    for(let key in collection) {
      func(collection[key], key);
    }
  }
}
/******************/
function filter(coll, predicate) {
  let acc = [];
  if(!(Array.isArray(coll))) {
    acc = {};
    each(coll, function(element, index) {
      if(predicate(element, index)) {
        acc[index] = element;
       }
      });
  }else {
    each(coll, function(element, index) {
      if(predicate(element, index)) {
        acc.push(element);
      }
    });
  }
  
  return acc;
}
/**************************************************/
/*
 Write a function called evens that takes an array of numbers as a parameter,
  and returns an array of only the even numbers in the parameter. 
*/
function evens(array) {
  
  return filter(array, function(element){
    return element % 2 === 0;
  });
}
/**************************************************************************/
/*
 Write a function called multiplesOfThree that takes an array of numbers as
a parameter, and returns an array of only the numbers that are multiples
 of three. 
*/
function multiplesOfThree(array) {
  
  return filter(array, function(element) {

    return ( (element != 0) && (element % 3 === 0) );
  });
}
/*********************************************************************/
/*
 Write a function called positives that takes an array of numbers as 
 a parameter, and returns an array of only the numbers that are positive. 
*/
function positives(array) {

  return filter(array, (element) => {
    
    return element > 0; 
  });
}
/***********************************************************************/
/*
 Write a function called evenLength that takes an array of strings 
 and returns an array of only the strings with an even length.
*/
function evenLength(array) {

  return filter(array, element => {

    return element.length % 2 === 0;
  });
}
/************************************************************************/
/*
1. Use filter to write the following functions:

 odds: Accepts an array of numbers, and returns the odd ones. 

 negatives: Like positives, but with negatives! 

 largerThanSix: given an array of numbers, returns those larger than 6.
*/
function odds(array) {

  return filter(array, element => {

    return element % 2 !== 0;
  });
}
/**********************************************/
function negatives(array) {

  return filter(array, element => {

    return element < 0;
  });
}
/********************************************/
function largerThanSix(array) {

  return filter(array, element => {
    
    return element > 6;
  });
}
/**************************************************************/
/*
2.Using filter, write a function startsWithChar that 
accepts two parameters: an array of strings, and a character (e.g. 'a'),
and returns an array of only the strings that start with that character:

 function startsWithChar(strings, character) { 
       // ... 
 } 
 var words = 'the quick brown fox jumps over the lazy dog'.split(' '); 
 startsWithChar(words, 'q'); // => ['quick'] 
 startsWithChar(words, 't'); // => ['the', 'the']
*/
function startsWithChar(array, caracter)  {

  return filter(array, function(element) {
    if(element[0] === caracter) {
      return element;
    }
  });
}
/*********************************************************************/
/*
3.Extend the filter function to pass the index of each element to the predicate; then, complete the following: Write a function called evenIndexedEvenLengths (yeah, a bit of a mouthful) that accepts an array of strings as a parameter, and returns only the strings that are found at an even index that also have an even length, e.g.:

 function evenIndexedEvenLengths(strings) { 
       // TODO: your code here 
 } 
 evenIndexedEvenLengths(['lion', 'monkey', 'aardvaark', 'cat', 'doge']); 
       // => ['lion', 'doge'] 
 evenIndexedEvenLengths(['red', 'green', 'purple', 'blue', 'yellow']); 
       // => ['purple', 'yellow']
*/
function evenIndexedEvenLengths(strings) {
  
  return filter(strings, function(element, index) {
    if( (element.length % 2 === 0) && (index % 2 === 0) ) {
      return element;
    }
  });
}
/*******************************************************************/
/*
4. Write a version of filter that works on arrays and objects; then, use
your updated version of filter to filter an object with values of mixed 
types to an object with only numeric values. You should be able to use 
your modified version of filter as follows:

 filter({a: 1, b: 'dog', c: true}, function(value) { 
       return typeof value === 'number'; 
 }); 
 // => {a: 1}
*/
function newFilter(object) {

  return filter(object, function(element) {
    
    return typeof(element) === "number";
  });
}
/**********************************************/
/*
5.Write function called moveZero that accepts an array of numbers as a paramerter
and returns an array of numbers with all the zero values moved to the end 'using filter'

 functoin moveZero(numbers){ 
       // To-Do code ..  
} 
 moveZero([2,0,3,0,40,3,6,0,10,11]); // ==> [2,3,40,3,6,10,11,0,0,0]
*/
function moveZero(numbers) {

  return filter(numbers, function(elem, inx) {
    if(elem !== 0) {
      return elem;
    }
  }).concat(filter(numbers, function(element, index) {
    if(element === 0) {
      return 1;
    }
  }));
}
/*********************************************************************/
/*
6.Write function called strongPasswords that accepts an array of object
representing usersData (email, password) and retrun an array of objects 
with the strong Password only using filter. Note: Strong password is comnied of :
- capital letters - small letters - numbers - sumbols - at least 8 characters long

 var usersData = [ 
       { user: {email: 'majd@rbk.org', password: '_Majd(2017)'}}, 
       { user: {email: 'fatema@rbk.org', password: '12345'}}, 
       { user: {email: 'maher@rbk.org', password: 'M@her2017'}}, 
       { user: {email: 'sahar@rbk.org', password: 'saher2017'}} 
 ]; 
 function strongPasswords(array){ 
       //your code is here 
 } 
 strongPasswords(usersData); // ==> [ 
 // { user: {email: 'maher@rbk.org', password: 'M@her2017'}}, 
 // { user: {email: 'maher@rbk.org', password: 'M@her2017'}} 
 // ];
*/
/**********************************************************************************/
function strongPasswords(arrayOfObjects) {
  let zeroToNine  = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
  let symbols = new Array( '&', '!', '~', '@', '"', '#', '{', '$', '(', '[', '-', '%', '`', '_', ')', ']', '+', '/', '*', '.', ',', '?', '§', '<', '>', 'µ', '£');
  let letter = new Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
  let capitalLetter = new Array('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
 //   console.log(capitalLetter);
 /* let checkPasswordStrength = {"rExists": zeroToNine, "lExists" :symbols, "cExists" : capitalLetter, "tExits": letter};  */
  let checkPasswordStrength = {"rExists": zeroToNine, "lExists" :letter, "cExists" : capitalLetter, "sExits": symbols};
  
  return filter(arrayOfObjects, function(element, index) {
    let passwordToBechecked = element["user"]["password"];
    let isThere = 0;

   

  });
}









var usersData = [ 
  { user: {email: 'majd@rbk.org', password: '_Majd(2017)'}}, 
  { user: {email: 'fatema@rbk.org', password: '12345'}}, 
  { user: {email: 'maher@rbk.org', password: 'M@her2017'}}, 
  { user: {email: 'sahar@rbk.org', password: 'saher2017'}} 
];