/**
 * REFERENCES:
 * - String methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#
 *
 * If you'd like to run your function to test it yourself,
 * uncomment it from the bottom of this file, then run this
 * file with `node project.js`.
 *
 * Good luck!
 */

/**
 * sumOdds(numbers):
 * - receives an array of numbers
 * - returns the sum of only the ODD numbers
 *
 * e.g.
 * sumOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]) -> 25
 * sumOdds([3, 7, 8, 15, 2, 1, 13]) -> 39
 */

 function sumOdds(numbers) {
   let sum=0;
  let oddNum = numbers.filter((num) => num % 2 !== 0);
   oddNum.forEach(num => {sum += num;});
  return sum;
  }

    // console.log(sumOdds([3, 7, 8, 15, 2, 1, 13]));
    
    /**
     * characterCount(string, c):
     * - receives a string and a character
     * - returns the number of times `c` occurs in the string
     * - note: this has to be case-insensitive
     *
     * e.g.
     * characterCount("Michael Stephenson", "e") -> 3
     * characterCount("Character Count is clever", "c") -> 4
     *
     * Hint: You need to turn the string into an array first
     * Another Hint: Use string methods to make it case-insensitive
     */
    function characterCount(string, c) {
      const LowArray = string.split("").map(item => item.toLowerCase());
      return LowArray.filter(x => x === c.toLowerCase()).length;
    }
    console.log(characterCount("Character Count is clever", "c"));
    
    /**
     * largestIncrement(numbers):
     * - receives an array of numbers
     * - returns the largest difference between two consecutive numbers in the array
     * - see example below for clarification
     * - assume all differences are positive numbers
     * e.g.
     * largestIncrement([1, 3, 7, 9, 12]) -> 4
     * 3 - 1 = 2
     * 7 - 3 = 4
     * 9 - 7 = 2
     * 12 - 9 = 3
     * largest: 4
     * 3 - 1 = 2 => num[i+1]- num[i] 
     * largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999]) -> 545
     */
    function largestIncrement(numbers) {
      // num[i+1]- num[i] > num[i+2]- num[i+1] > .. > num[i+m]- num[i+n] algorithm
      let max = 0; 
      numbers.forEach((num,index) =>{numbers[index+1] - num;
      if ( numbers[index+1] - num > max) { max = numbers[index+1] - num;}}); 
      return max;}

    // console.log(largestIncrement([11, 35, 52, 14, 56, 601, 777, 888, 999])); 
    console.log(largestIncrement([1, 3, 7, 9, 12]));
    
    /**
     * afterX(numbers, x):
     * - receives an array of numbers, and a number `x`.
     * - returns an array of every number in `numbers` that occurs after `x`.
     *
     * - assume there are no duplicate numbers.
     *
     * e.g.
     * afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) -> [4, 5, 6, 7, 8, 9]
     * afterX([11, 35, 52, 14, 56, 601, 777, 888, 999], 52) -> [14, 56, 601, 777, 888, 999]
     */
    function afterX(numbers, x) {
     let c = numbers.filter(num => num > x );
      return c;
    }
    console.log(afterX([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
    
    /**
     * abbreviate(firstName, lastName):
     * - receives a first name and a last name
     * - returns the initials in uppercase
     *
     * e.g.
     * abbreviate("Michael", "Singer") -> "MS"
     * abbreviate("jordan", "peterson") -> "JP"
     *
     * Hint: Use string method .toUpperCase()
     */
    function abbreviate(firstName, lastName) {
    let firstAbbr = firstName.slice(0,1);
    firstAbbr = firstAbbr.toUpperCase();
    let SecondAbbr = lastName.slice(0,1);
    SecondAbbr = SecondAbbr.toUpperCase();
    return firstAbbr+SecondAbbr;
    }
    console.log(abbreviate("dee", "jay"));
    
    /**
     * isUpperCase(string):
     * - receives a string
     * - returns true if the string is uppercase, false otherwise
     *
     * e.g.
     * isUpperCase("Mickey S") -> false
     * isUpperCase("JCREW") -> true
     *
     */
    function isUpperCase(string) {
      if (string.toUpperCase() === string) {
      return true;
      } else {
        return false;
      }
    }
    
    // console.log(isUpperCase("JCREW"));
    /**
     * elementInArray(numbers, x):
     * - receives an array of numbers, and a number `x`.
     * - returns true if `x` is found in the array, false otherwise
     *
     * e.g.
     * elementInArray([5, 6, 7], 6) -> true
     * elementInArray([5, 6, 7], 8) -> false
     *
     */
    function elementInArray(numbers, x) {
      return numbers.includes(x); //return true
    }
    console.log(elementInArray([5, 6, 7], 8));
    
    module.exports = {
      sumOdds,
      characterCount,
      largestIncrement,
      afterX,
      abbreviate,
      isUpperCase,
      elementInArray,
    };