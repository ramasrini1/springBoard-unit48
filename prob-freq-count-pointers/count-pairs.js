// add whatever parameters you deem necessary
function countPairs(arr, target) {
  let s1 = new Set(arr);
  let count = 0;
  for( let i=0; i < arr.length; i++){
    s1.delete(arr[i]);
    if (s1.has(target - arr[i])){
      count++;
    }
  }
  return count;
}

// console.log(countPairs([3,1,5,4,2], 6)); // 2 (1,5 and 2,4)
// console.log(countPairs([10,4,8,2,6,0], 10)) // 3 (2,8, 4,6, 10,0)
// console.log(countPairs([4,6,2,7], 10)) // 1 (4,6)
// console.log(countPairs([1,2,3,4,5], 10)) // 0
// console.log(countPairs([1,2,3,4,5], -3)) // 0
// console.log(countPairs([0,-4],-4)) // 1
// console.log(countPairs([1,2,3,0,-1,-2],0)) // 2

module.exports = countPairs;