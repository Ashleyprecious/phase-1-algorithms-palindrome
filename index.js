function isPalindrome(word) {
  // Write your algorithm here
  const cleanedWord = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  return cleanedWord === cleanedWord.split('').reverse().join('');

}

/* 
  Add your pseudocode here
1. Remove non-alphanumeric characters from the input word and convert it to lowercase.
  2. Check if the cleaned word is equal to its reverse.
  3. If it is, return true (it's a palindrome), else return false.
*/

/*
  Add written explanation of your solution here:
  1.The function removes non-alphanumeric characters and converts the word to lowercase.
  2.checks if the cleaned word is equal to its reverse. If true, the word is a
   palindrome and the function returns true. Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
