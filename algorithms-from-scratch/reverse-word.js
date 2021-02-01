function reverseWords(str) {
  str = str.toLowerCase();
  let wordArr = str.split(" ");

  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = reverseWord(wordArr[i]);
  }

  return wordArr.join(" ");
}

function reverseWord(str) {
  let reversedWord = "";
  for (let i = str.length - 1; i >= 0; --i) {
    reversedWord += str[i];
  }
  return reversedWord;
}

console.log(reverseWords("Car is here")); // expected: rac si ereh
console.log(reverseWords("Star")); // expected: rats
