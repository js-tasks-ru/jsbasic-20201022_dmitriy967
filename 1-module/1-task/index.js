/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  // ваш код...
let value = 1;
while(n){
  value *= n--;
}
return value;
}

