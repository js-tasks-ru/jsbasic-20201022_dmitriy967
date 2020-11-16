/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  // ваш код...
  if (str == '') {
     return str;
 } else if (str.length < 2) {
     return str[0].toUpperCase();
 } else if (str.length > 1) {
     return str[0].toUpperCase() + str.slice(1);
 }
 
}
