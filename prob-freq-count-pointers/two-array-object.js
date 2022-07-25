// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
  let obj = {}
  for ( let i=0; i<arr1.length; i++){
    obj[arr1[i]] = ( arr2[i])? arr2[i]: null
  }
  return obj;
}

module.exports = twoArrayObject;

//console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]))