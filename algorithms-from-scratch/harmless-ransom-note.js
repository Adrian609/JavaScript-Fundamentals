function harmlessRansomNote(noteText, magazineText) {
  let noteArr = noteText.split(" "); // splits string into an array of words
  let magazineArr = magazineText.split(" ");
  let magazineObj = {}; // define magazine objects

  // what words are availabe in magazine text
  magazineArr.forEach((word) => {
    // if word is not present in object we add it to the magazine object
    if (!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  let noteIsPossible = true;
  /*
   in the note array we want to chec that its available in the magazine object. 
   If it is not available we cannot write our ransom note and will return false
  */
  noteArr.forEach((word) => {
    if (magazineObj[word]) {
      magazineObj[word]--;
      if (magazineObj[word] < 0) noteIsPossible = false;
    } else {
      noteIsPossible = false;
    }
  });
  return noteIsPossible;
}

// expected true because both strings have the same words
console.log(
  harmlessRansomNote(
    "this is all the magazine text in the magazine",
    "this is all the magazine text in the magazine"
  )
);
// expected false because magazine text does not have all the words to make the ransome note
console.log(
  harmlessRansomNote(
    "this is all the magazine text in the magazine",
    "this is all the magazine text the magazine"
  )
);
