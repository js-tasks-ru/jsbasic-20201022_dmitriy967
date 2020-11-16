/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  // ваш код...
    let value = str.split('',maxlength - 1);
    let cutter =  "…";

    if(str.length > maxlength - 1){
        return value.join('') + cutter;
    } else {
        return str;
    };
   
}
