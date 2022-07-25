// add whatever parameters you deem necessary
function separatePositive(arr) {
  let i = 0;
  let j = arr.length-1;
  while( i < j ){
    //console.log("i : " + i + " arr[i]" + arr[i] + " " + " j " + j + " arr[j] " + arr[j])
    if (arr[j] > 0 && arr[i] < 0 ){
      //swap
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++; 
    } else if (arr[i] > 0 && arr[j] > 0 ) {
      i++;
    } else if ( arr[i] < 0 && arr[j] < 0 ){
      j--;
    } else if (arr[i] > 0 && arr[j] < 0) {
      i++;
    }
  }
  return arr;
}

// add whatever parameters you deem necessary
// TimeComplexity (n pow2 )
// function separatePositive(arr) {
//   for (let i=0; i<= arr.length-2; i++){
//     for(let j=i; j<arr.length; j++){
//       if ( arr[i] > 0 && arr[j] <0 ){
//         //swap
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }



//console.log(separatePositive([2, -1, -3, 6, -8, 10])) // [2, 10, 6, -3, -1, -8]
//console.log(separatePositive([5, 10, -15, 20, 25])) // [5, 10, 25, 20, -15]
//console.log(separatePositive([-5, 5])) // [5, -5]
//console.log(separatePositive([1, 2, 3])) // [1, 2, 3]

module.exports = separatePositive;
