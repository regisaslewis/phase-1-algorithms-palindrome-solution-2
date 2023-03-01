function isPalindrome(word) {
// Write your algorithm here
//   iterate from the beginning to the middle of the word
//   get the length of the string and divide by two, round down for the middle index
for (let i = 0; i < word.length / 2; i++) {
  //   check each letter to the corresponding letter from the end
  const j = word.length - 1 -i;

//     if any letters don't match, return false
  if (word[i] !== word[j]) return false;
}
// return true
return true;
}

/* 
  Add your pseudocode here

  Make a function that returns true if the word is a palindrome.  That means if the first letter is the same as the last letter and the second letter is the same as the second to last letter, etc. until we reach the middle, return true.

  abba
  ^  ^
   ^^
  true

  robot
  ^   x
  false

  iterate from the beginning to the middle of the word
    check each letter to the corresponding letter from the end
      if any letters don't match, return false
  
  return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
}

module.exports = isPalindrome;
