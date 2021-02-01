function isPalindrome(string) {
  string = string.toLowerCase();
  let characterArr = string.split("");
  const validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

  let lettersArr = [];
  characterArr.forEach((char) => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  });

  if (lettersArr.join("") === lettersArr.reverse().join("")) return true;
  else return false;
}

console.log(isPalindrome("Madam I'm Adam")); // expected true
console.log(isPalindrome("Nike")); // expected false
console.log(isPalindrome("racecar")); // expected true
