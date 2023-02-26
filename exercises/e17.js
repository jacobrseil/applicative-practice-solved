export function minBy(array, cb) {
   let returnObj = array[0];
   for (let i = 1; i < array.length; i++) {
      if (cb(array[i]) < cb(returnObj)) {
         returnObj = array[i];
      }
   }
   return returnObj;
}

export function maxBy(array, cb) {
   let returnObj = array[0];
   for (let i = 1; i < array.length; i++) {
      if (cb(array[i]) > cb(returnObj)) {
         returnObj = array[i];
      }
   }
   return returnObj;
}
