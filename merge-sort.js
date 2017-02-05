/*jshint esversion: 6 */

// let myArray = [9,2,5,6,4,3,7,10,1,8,11];

/*
  top down merge sort algorithm which recursively
  divides the input list into smaller sublists until the
  sublists are trivially sorted, and then merges the
  sublists while returning up the call chain.
*/

function mergeSort(myArray) {
  var middle = Math.floor(myArray.length / 2);
  var left = myArray.slice(0, middle);
  var right = myArray.slice(middle);

  if (myArray.length < 2) {
    return myArray;
  }
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  var tmp = [];
  while(left.length && right.length){
    if(left[0] < right[0]){
      // shift removes the first element from an array & returns that element
      tmp.push(left.shift());
      // console.log('left', tmp);
    } else {
      tmp.push(right.shift());
      // console.log('right', tmp);
    }
  }
  return tmp.concat(left.slice().concat(right.slice()));
}

// console.log(mergeSort(myArray));

module.exports = mergeSort;