/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  // ваш код...
  let value = str.toLowerCase();
  if( value.includes('xxx') || value.includes('1xbet')){
      return true;
  } else {
      return false;
  }
}
