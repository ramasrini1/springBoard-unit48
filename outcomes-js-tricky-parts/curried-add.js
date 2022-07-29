function curriedAdd(total) {
  console.log("top level " + total);
  if (total === undefined) return 0;
  return function addNext(num) {
    if (num === undefined) { 
      console.log("total in undefined " + total + " num " + num)
      return total; 
    }
    total += num;
    console.log("total is " + total + " num " + num );
    return addNext;
  };
}

// let addC = curriedAdd(2);
// console.log(addC(3)());
module.exports = { curriedAdd };
