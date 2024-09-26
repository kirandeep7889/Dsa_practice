function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function separate(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    // till the time i and j has not passed each other
    if (arr[i] == 1) {
      // we just check if there is 1 at ith position of arr, we swap the values  of ith and jth index of arr no matter what is at  jth position
      swap(arr, i, j);
      j--; //  after swapping we decrease the index of  jth index by 1
    } else {
      i++; // expand the  left window by 1 if i position of array contains 0
    }
  }
}

let arr = [1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1];

separate(arr);

console.log(arr);
