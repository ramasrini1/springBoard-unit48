// add whatever parameters you deem necessary
// function isSubsequence(str1, str2) {
//   let sub = str1;
//   for (let i=0; i<str1.length -1; i++){
//     for (let j=str1.length; j-i > 1; j--){
//       sub = str1.substring(i, j)
//       //console.log("sub: " + sub + " i " + i + " j " + j )
//       if ( str2.includes(sub)) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

function isSubsequence(str1, str2) {
  let str1Idx = 0;
  let str2Idx = 0;
  if (!str1) return true;
  while (str2Idx < str2.length) {
    if (str2[str2Idx] === str1[str1Idx]) {
      str1Idx += 1;
    }
    if (str1Idx === str1.length) return true;
    str2Idx += 1;
  }
  return false;
}
module.exports = isSubsequence;
// console.log(isSubsequence('hello', 'hello world'));
// console.log(isSubsequence('sing', 'sting')); // true
// console.log(isSubsequence('abc', 'abracadabra')); // true
// console.log(isSubsequence('abc', 'acb')); // false (order matters)