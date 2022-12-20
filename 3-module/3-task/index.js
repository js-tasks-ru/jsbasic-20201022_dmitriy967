/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // ваш код...
  let arr = str.split("-");

  let result = arr[0]
    ? arr.map((elem, index) =>
        elem && !index ? elem : elem[0].toUpperCase() + elem.slice(1)
      )
    : arr.map((elem, index) =>
        !elem && index === 0 ? elem : elem[0].toUpperCase() + elem.slice(1)
      );

  const camilizeStr = result.join("");

  return camilizeStr;
}
