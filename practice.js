// const firstArr = [1, 2, 3];
// const secondArr = [4, 5, 6];
// const addedArr = [];
// const diffArr = [];
// const mulArr = [];
// const divArr = [];
// const absArr = [];
// // sum of two arrays elements
// const sumArrElements = (firstArrElement, secondArrElement) => {
//   return firstArrElement + secondArrElement;
// };

// // difference of two arrays elements
// const diffArrElements = (firstArrElement, secondArrElement) => {
//   return firstArrElement - secondArrElement;
// };

// // multiplictaion of two arrays elements
// const mulArrElements = (firstArrElement, secondArrElement) => {
//   return firstArrElement * secondArrElement;
// };

// // division of two arrays elements
// const divArrElements = (firstArrElement, secondArrElement) => {
//   return firstArrElement / secondArrElement;
// };

// // absolute of two arrays elements
// const absArrElements = (firstArrElement, secondArrElement) => {
//   return Math.abs(firstArrElement - secondArrElement);
// };

// for (let i = 0; i < (firstArr.length + secondArr.length) / 2; i += 1) {
//   addedArr.push(sumArrElements(firstArr[i], secondArr[i]));
//   diffArr.push(diffArrElements(firstArr[i], secondArr[i]));
//   mulArr.push(mulArrElements(firstArr[i], secondArr[i]));
//   divArr.push(divArrElements(firstArr[i], secondArr[i]));
//   absArr.push(absArrElements(firstArr[i], secondArr[i]));
// }
// console.log(addedArr);
// console.log(diffArr);
// console.log(mulArr);
// console.log(divArr);
// console.log(absArr);

// // multiplication of array with a integer
// const multiplyByNumber = 4;

// const mulArrByNumber = firstArr.map((x) => x * multiplyByNumber);
// console.log(mulArrByNumber);

// // fibonacci numbers
// const fibonacciArr = [0, 1];
// const length = 100;
// const fibonacciNumbers = (firstNum, secondNum) => {
//   return firstNum + secondNum;
// };
// for (let i = 0; i <= length; i += 1) {
//   fibonacciArr.push(fibonacciNumbers(fibonacciArr[i], fibonacciArr[i + 1]));
// }

// console.log(...fibonacciArr);

// let p = [];
// p.name = 'mani';
// let who = p.name;
// p[0] = 'I am mani';
// p['plea'] = 'i would never';
// console.log(
//   p.indexOf(who),
//   p[0],
//   p['plea'],
//   p.plea,
//   p.indexOf(p.plea),
//   p.length
// );
// console.log(who, p);
// console.log(typeof p === 'array');
// console.log(typeof p === 'object');

// let obj = {};
// obj[
//   (function () {
//     return 3; // 3 => 'mani' check output
//   })()
// ] = 'mani';
// console.log(obj);

const foo = () => {
  return {
    bar: 'Hello',
  };
};
const foo2 = () => {
  return {
    bar: 'Hello',
  };
};
console.log(foo(), foo2());
