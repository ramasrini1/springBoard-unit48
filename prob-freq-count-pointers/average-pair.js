// add whatever parameters you deem necessary
// function averagePair(arr, target) {
//   for (let i=0; i<=arr.length-1; i++){
//     for(let j=i+1; j<= arr.length-1; j++ ){
//       let avg = (arr[i] + arr[j])/2;
//       console.log(" i: " + i + " j: " + j + " avg is " + avg)
//       if (avg === target){
//         return true;
//       }
//     }
//   }
//   return false;
// }

function averagePair(arr, target) {
  let i = 0;
  let j = arr.length -1;
  while( i < j ){
    let avg = (arr[i] + arr[j])/2;
    if ( avg > target){
      //decrement j, move left
      j--;
    } else if ( avg < target){
      //increment i, move right
      i++;
    } else {
      //avg === target
      return true;
    }
  }
  return false;
}

//console.log(averagePair([1,2,3] , 2.5));
//console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
//console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
//console.log(averagePair([], 4)); // false

module.exports = averagePair;