let arr = [];
let sumInput = () =>{
let summa = 0;
  for (let i = 0; i < i + 1;i++){
    let number = prompt("Введите число");
    if (typeof(number) === "object" || isNaN(number) === true || Boolean(number) === false){
    break;
  }
let convertNumber = Number(number);
summa += convertNumber;
arr.push(convertNumber);
}
alert(`Введеный вами массив данных: ${arr}`);
alert(`Сумма введеного вами массива данных: ${summa}`);
}
sumInput();
