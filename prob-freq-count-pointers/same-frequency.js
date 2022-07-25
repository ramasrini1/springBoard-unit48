function createFrequencyMap(num){
  let numStr = num.toString();
  let freqMap = new Map();
  for (let i = 0; i<numStr.length; i++){
    //let number = parseInt(numStr[i]);
    let count = freqMap.get(numStr[i]) + 1 || 1;
    freqMap.set(numStr[i], count);
  }
  return freqMap;
}
function printMap(m){
  for (let [key, value] of m) {
    console.log("key: " + key + " freq: " + value)
  }
  console.log("__________________");
}

// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  map1 = createFrequencyMap(num1);
  map2 = createFrequencyMap(num2);
  if (map1.size !== map2.size) { return false}
  for( let key of map1.keys() ){
    if (map1.get(key) !== map2.get(key)){
      return false
    }
  }
  return true;
}

module.exports = sameFrequency;

//res = sameFrequency(182,281);
//res = sameFrequency(34,14)
//res = sameFrequency(3589578, 5879385)
//res = sameFrequency(22,222) // false
//console.log(res);
