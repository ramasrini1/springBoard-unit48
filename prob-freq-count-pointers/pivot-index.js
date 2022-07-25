// add whatever parameters you deem necessary
function sum(arr, start, end){
  let total = 0;
  for(let i=start; i<=end; i++){
    total += arr[i];
  }
  return total
}

function pivotIndex(arr) {
  let moved = 0;
  for (let i=0; i< arr.length; i++){
    let mid = i+1;
    let leftSum = sum(arr, 0, mid -1);
    let rightSum = sum(arr, mid+1, arr.length-1)
    if (leftSum === rightSum) {
      return mid
    }
    mid++;
  }
  return -1;
}

console.log(pivotIndex([1,2,1,6,3,1])) // 3
console.log(pivotIndex([5,2,7])) // -1  no valid pivot index
console.log(pivotIndex([-1,3,-3,2])) //
