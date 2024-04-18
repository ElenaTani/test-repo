"use strict";

// First way

let value = prompt();
if (isNaN(value)) {
  console.log("Помилка: введіть число");
}

for (let i = 2; i <= value; i++) {
  if (!(i % 2)) {
    console.log(i);
  }
}
