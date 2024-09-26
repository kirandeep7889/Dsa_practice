// Given an array of strings , print all the unique strings  of the array.

let array = ["abc", "hello", "c", "d", "abc", "a", "b", "c", "d"];
let obj = {};

for (const element of array) {
  if (!obj[element]) {
    obj[element] = true;
  }
}

for (const keys in obj) {
  console.log(keys);
}
