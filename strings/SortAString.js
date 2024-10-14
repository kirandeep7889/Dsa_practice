const string = "eedccaab";
let CountOfEachChar = {};

for (let i = 0; i < string.length; i++) {
  const char = string.charAt(i);
  if (CountOfEachChar[char]) {
    CountOfEachChar[char]++;
  } else {
    CountOfEachChar[char] = 1;
  }
}

let result = "";

// Loop through 'a' to 'z'
for (let charCode = 97; charCode <= 122; charCode++) {
  const char = String.fromCharCode(charCode);

  // Check if the character exists in CountOfEachChar
  if (CountOfEachChar[char]) {
    // Append the character 'CountOfEachChar[char]' times
    for (let i = 0; i < CountOfEachChar[char]; i++) {
      result += char;
    }
  }
}

console.log(result);
