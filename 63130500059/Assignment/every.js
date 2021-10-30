// 63130500059

// ! Syntax
// every((element) => { ... } )
// every((element, index) => { ... } )
// every((element, index, array) => { ... } )

// ! Description
// every method จะคืนค่า true เมื่อ callbackFn ที่เรียกใช้สำหรับทุก element ทุกตัวใน array คืนค่าเป็น true
// หากเจอ element ที่คืนค่าเป็น false แล้ว every จะคืนค่า false ทันที.
// note!!: การเรียกใช้เมธอดนี้ในอาร์เรย์ที่ว่างเปล่าจะคืนค่า true สำหรับเงื่อนไขใด ๆ

// ! How to use
// array.every(callbackFn);
// array.every((element, index, array) => { ... });

// ! Parameters
//    every method มี parameter ที่รับ callbackFn ที่จะใช้กับ element ทุกตัว โดย callbackFn รับ 3 arguments ได้แก่
// element -> รับค่าเป็น element
//      element จาก array ที่จะประมวลผล
// index (Optional) -> รับค่า INTEGER
//      เป็น index ของ element จาก array ที่จะประมวลผล
// array (Optional) -> รับค่าเป็น array
//      array ของ element ทั้งหมดที่ถูกเรียกใช้

// ! Return value
//    Boolean (TRUE / FALSE)

// Ex.1 ----------------------------------------
function isBigEnough(element, index, array) {
  return element >= 10;
}
let arr1 = [12, 54, 18, 130, 44].every(isBigEnough);
console.log(`Ex.1 : ${arr1}`); //true






// Ex.2 ----------------------------------------
let arr2 = [12, 5, 8, 130, 44];
let result2 = arr2.every((element) => element >= 10);
console.log(`Ex.2 : ${result2}`); //false






// Ex.3 ----------------------------------------
const isBelowThreshold = (currentValue) => currentValue < 40;

const arr3 = [1, 30, 39, 29, 10, 13];

console.log(`Ex.3 : ${arr3.every(isBelowThreshold)}`); //true






// Ex.4 ----------------------------------------
// arr4 = [1, 2, 3, 4, 5];
arr4 = [1, 4, 3, 4, 5];
let result = arr4.every((elem, index, arr) => {
  console.log(`[${arr}] ตำแหน่ง index ที่ ${index} มีค่าเท่ากับ -> ${elem}`);
  return elem < 4;
});
console.log(result);






// Question ----------------------------------------
function isSubset(array1, array2) {
  // returns true if array2 is a subset of array1

  return array2.every(function (element) {
    return array1.includes(element);
  });
}

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]));
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7]));
