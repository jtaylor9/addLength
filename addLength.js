/**
 * Created by jtayl_000 on 9/24/2015.
 */

var array1 = ["apple", "pear"];
var array2 = ["you", "can", "win"];

function addLength(array) {
  var resultArray = [];


  return resultArray.push(array,_.reduce(array, function(memo, num){ return memo + array[memo].length;}, 0));
}

console.log(addLength(array1));
console.log(addLength(array2));