// eg. input s-Myself2 me1 I4 and3
// o/p me Myself and I

function sortingSentence(str) {
  // first split the sentence  into  words
  let words = [];
  let currentWord = "";
  let IndexOfEachWordObject = {};

  //step.1 Splitting the sentence

  //this is built in method for splitting the sentence
  //   words = str.split(" ");

  // using manual approach for splitting the sentence
  for (let i = 0; i < str.length; i++) {
    console.log("character at i index is", str.charAt(i));
    if (str.charAt(i) != " ") {
      currentWord += str.charAt(i);
    } else {
      words.push(currentWord);
      currentWord = "";
    }
  }
  words.push(currentWord);

  console.log(words); //[ 'Myself2', 'me1', 'I4', 'and3' ]

  // step.2 from each word of  array , take out the last index value of word and use it to store as a index
  // of the word in the object.

  for (let i = 0; i < words.length; i++) {
    let position = words[i].charAt(words[i].length - 1);
    IndexOfEachWordObject[position - 1] = words[i].substring(
      0,
      words[i].length - 1
    );
  }

  // step 3. again rebuild the sentence by iterating the IndexOfEachWordObject  and  placing the words at their positions as defined in object

  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += IndexOfEachWordObject[i];
    if (i < words.length - 1) {
      result += " "; // Add space between words, but not after the last word
    }
  }

  return result;
}
const str = "Myself2 me1 I4 and3";
console.log(sortingSentence(str));
