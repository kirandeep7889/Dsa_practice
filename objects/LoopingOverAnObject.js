let x = {
  name: "kirandeep",
  company: "Avisoft",
  salary: 30000,
  age: 22,
  city: "jammu",
  designation: "SDE-1",
};

let keysOfX = Object.keys(x); // it will return  an array of the keys of x
// console.log(keysOfX);

let ValuesOfX = Object.values(x); //it will return the array of the values of x
// console.log(ValuesOfX);

let entriesOfX = Object.entries(x); //it will return an array of arrays of the key value pair
// console.log(entriesOfX);

//LOOP OVER AN OBJECT

// first way:- for of loop

for (const entry of Object.entries(x)) {
  console.log(entry);
}

// second way:- for in loop

for (const keys in x) {
  //for in loop lets us loop over the object keys
  console.log(keys, x[keys]);
}
