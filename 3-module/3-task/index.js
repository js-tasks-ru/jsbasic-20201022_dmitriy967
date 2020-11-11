/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // ваш код...
  let changeOne = str.split('-');

  let changeTwo = changeOne.map(

    (item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    
    );

    let changeTree = changeTwo.join('');

    return changeTree;
}
