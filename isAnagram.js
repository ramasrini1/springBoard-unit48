function makeFreqCounter(str){
  let frequencies = new Map();
  for( let i=0; i<str.length; i++){
    let count = frequencies.get(str[i]) + 1 || 1;
    //console.log("count is " + count);
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

function isAnagram( str1, str2){
  if ( str1.length !== str2.length ){
    return false;
  }
  let m1 = makeFreqCounter(str1);
  let m2 = makeFreqCounter(str2);

  if (m1.size !== m2.size) {
    return false
  }

  for (let key of m1.keys()) {
    //console.log("key " + key + " value " + value);
    if ( m2.get(key) !== m1.get(key)) { 
      return false
    } 
  }
  return true;
}

function isAnagramShortMethod(str1, str2){
 return str1.split('').sort().join('') === str2.split('').sort().join('');
}

//console.log(isAnagram("anagram", "nagara"));

console.log(isAnagramShortMethod("anagram", "nagara"))