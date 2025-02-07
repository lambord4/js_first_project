let str1 = prompt("Введите первую строку:");
let str2 = prompt("Введите вторую строку:");
let str3 = prompt("Введите третью строку:");

let arr = [str1, str2, str3];

arr.sort(() => Math.random() - 0.5);

console.log(`Результат: ${arr[0]}, ${arr[1]}, ${arr[2]}`);
