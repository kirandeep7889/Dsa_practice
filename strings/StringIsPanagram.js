// A string is panagram if it contains all lower case alphabets
const isPangram = (sentence) => {
  const uniqueChars = new Set();

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence.charAt(i);
    uniqueChars.add(char);
    console.log(uniqueChars);

    // If we have all 26 letters, we can return true early
    if (uniqueChars.size === 26) {
      return true;
    }
  }

  // If we reach here, check if we have 26 unique letters
  return uniqueChars.size === 26;
};

const sentence = "thequickbrownfoxjumpsoverthelazydog";
console.log(isPangram(sentence));
