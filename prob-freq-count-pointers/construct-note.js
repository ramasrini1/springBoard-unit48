// add whatever parameters you deem necessary
function calculateFreqCount(str){
  frequencies = new Map();
  for( let i=0; i<str.length; i++ ){
    // falsy or truthy is truthy;
    let count = frequencies.get(str[i]) + 1 || 1;
    frequencies.set(str[i], count);
  }
  return frequencies;
}

function printMap(m){
  for (let [key, value] of m) {
    console.log("key: " + key + " freq: " + value)
  }
  console.log("__________________");
}

function constructNote(msg, letter) {
  if ( msg.length > letter.length ){
    return false;
  }
  let messageCount = calculateFreqCount(msg);
  let letterCount  = calculateFreqCount(letter);
  
  for( let key of messageCount.keys() ){
    if ( messageCount.get(key) > letterCount.get(key)) { 
      return false
    }
  }
  return true;
}
// console.log(constructNote("aa", "abcd"));
// console.log(constructNote("", "abc"));
//console.log(constructNote("aa", "abcd"))
// console.log(constructNote("skbjjjvnnd", "fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd"))
//console.log(constructNote("abc", "abcd"));

module.exports = constructNote;
