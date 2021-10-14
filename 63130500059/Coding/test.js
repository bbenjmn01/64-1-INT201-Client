// let a = prompt("Hello World");
// alert(a);

// function isBigEnough(element, index, array) {
//   return element >= 10;
// }
// [12, 5, 8, 130, 44].every(isBigEnough); // false
// [12, 54, 18, 130, 44].every(isBigEnough); // true

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [2, 4, 6, 8, 10];

function check(arr1, arr2) {
  let result = [];
  //   for (let i = 0; i < arr1.length; i++) {
  //     for (let j = 0; j < arr2.length; j++) {
  //       if (arr1[i] == arr2[j]) {
  //         arr1[i] = null;
  //       }
  //     }
  //   }
  //   return arr1.filter((elem) => elem != null);

  for (let i of arr1) {
    if (arr2.includes(i) == false) {
      result.push(i);
    }
  }
  return result;
}

console.log(check(arr1, arr2));
