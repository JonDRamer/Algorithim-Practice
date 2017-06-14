"use strict";

// ------------  MERGE SORT  ----------------//
let arr1 = [1,2,3,4,80];
let arr2 = [10,20,40,60,70];

function mergeSort (a, b) {
  let newArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      newArray.push(arr1[i]);
      i += 1;
    } else {
      newArray.push(arr2[j]);
      j += 1;
    }
  }
  while (i < arr1.length) {
    newArray.push(arr1[i]);
    i += 1;
  }
  while (j < arr2.length) {
    newArray.push(arr2[j]);
    j += 1;
  }
  console.log(newArray);
  return newArray;
}
// mergeSort(arr1, arr2);
