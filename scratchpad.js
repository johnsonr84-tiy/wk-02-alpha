/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 *


 *  !WOOT!   Intro to JS Functions   !WOOT!
 *
 *  Clone this gist.
 *  Use scratchpad or snippets to test your code.
 *  Below each of the functions that you will complete, 
 *  there is a test, or tests, to see how your code works.
 *
 *  Read the comments below and follow their instructions
 *  You should _ONLY_ be entering code where a function
 *  explicitly states:
 *  // YOUR CODE HERE
 *
 *  Part 5 is for the Skilled Sorcerers and Wise Wizards
 *  among you!
 *
 *  When you're happy with your code, update your gist and 
 *  post it's url to the assignment URL.
 */

var myObject = {
  superPower: "som text",
  anotherProperty: "something",

};

/**
 * PART 0
 *
 * Define a function max() that takes two numbers as
 * arguments and returns the largest of them. Use the
 * if-then-else construct available in Javascript.
 */

function max(a, b){ 
    if (a > b) {
      return a;
    } else {
      return b;
    }
}

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){
    if ((a > b) && (a > c)) 
      return a
     else if (b > c)
      return b 
     else return c
    }

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char){
    if char = vowel
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */

function rovarspraket(text){
    // YOUR CODE HERE
}

console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
    // YOUR CODE HERE
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * For the Skilled Sorcerers and Wise Wizards among you!
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
    // YOUR CODE HERE
}

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("Make it work, then make it better!") === "better!")
/*
Exception: SyntaxError: missing ) after condition
@Scratchpad/1:67
*/
/*
Exception: SyntaxError: missing ) after condition
@Scratchpad/1:67
*/
/*
Exception: SyntaxError: expected expression, got '}'
@Scratchpad/1:72
*/
/*
Exception: SyntaxError: expected expression, got '}'
@Scratchpad/1:72
*/