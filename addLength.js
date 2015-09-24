/**
 * Created by jtayl_000 on 9/24/2015.
 */

var array1 = ["apple", "pear"];
var array2 = ["you", "can", "win"];

function addLength(array) {}
  return _.map(array, function(arr){ return arr + " " + arr.length;};
}

console.log(addLength(array1));
console.log(addLength(array2));