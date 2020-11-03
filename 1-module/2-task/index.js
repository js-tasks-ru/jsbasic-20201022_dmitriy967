/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  // ваш код...
  for (i = 0; i < name.length; ++i) {
    let letter = name[i];
    if (letter == " ") { 
      return false; 
    }
 }

   if (name == "") { 
     return false; 
    }
   
   if (name.length < 4) { 
     return false; 
    }
 
   return true;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
