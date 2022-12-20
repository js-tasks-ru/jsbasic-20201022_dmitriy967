/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // ваш код...
  const result = str
    .split("-")
    .map((elem) => elem && elem[0].toUpperCase() + elem.slice(1));

  const camilizeStr = result.join("");
  
  return camilizeStr;
}
