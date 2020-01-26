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
function filter(array, predicate) {
  let acc = [];
  each(array, function(element, index) {
    if(predicate(element)) {
      acc.push(element);
    }
  });
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