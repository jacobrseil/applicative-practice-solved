// see e16.md

export function find(array, callback) {
   let returnElement;
   for (const element of array) {
      if (callback(element)) {
         returnElement = element;
         break;
      }
   }
   return returnElement;
}
