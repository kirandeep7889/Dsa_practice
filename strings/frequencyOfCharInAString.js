let str = "javascript";
let frequencyMap = {}; //initially code

for (const char of str) {
  //iterate over the string using for of loop
  if (frequencyMap[char]) {
    // check if frequency map already contains the particular char
    frequencyMap[char] += 1; //if yes
  } else {
    //
    frequencyMap[char] = 1; //if not
  }
}

for (const keys in frequencyMap) {
  console.log(
    "frequency of  occurences of unique characters of a string are",
    keys,
    frequencyMap[keys]
  );
}
