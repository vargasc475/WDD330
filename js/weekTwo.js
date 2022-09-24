// EXERCISES FROM CHAPTER 2

// 1 My own
const listOfNumbers = ['#', '##', '###', '####', '#####', '######', '#######'];
console.log('Excercise from chapter 2')

for(let i= 0; i < 7; i++) {
    console.log(listOfNumbers[i]);
} 

/* SOLUTION
for (let newLine = '#'; newLine.length < 8; newLine += '#')
    console.log(newLine);
*/

//  2 My own 
for (let numbers = 1; numbers < 101; numbers += 1) {
    const divisionBy3 = numbers / 3;
    const divisionBy5 = numbers / 5;
    if (Number.isInteger(divisionBy3) && Number.isInteger(divisionBy5)) {
        console.log("FizzBuzz")
    } else if (Number.isInteger(divisionBy3)) {
        console.log("Fizz");
    } else if (Number.isInteger(divisionBy5)) {
        console.log("Buzz");   
    } else {
        console.log(numbers);
    }
}

/* SOLUTION
 for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  } */

// EXERCISE FROM CHAPTER 3

console.log('Excercise from chapter 3')
// 1 My own 
function min(x, y) {
    if (x < y) { return x}
    else {return y}
  }
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10

// EXERCISE FROM CHAPTER 4
console.log('Excercise from chapter 4')

// 1 My own
function range(start, end) {
    let i = [];
    if (start < end) {
        for ( let x = start; x <= end; x += 1) i.push(x);
    } else {
        i.push(end);  
    }
    return i
}

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total
}

console.log(range(1, 10))
console.log(sum(range(1, 10)))

/* SOLUTION 

function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
} */