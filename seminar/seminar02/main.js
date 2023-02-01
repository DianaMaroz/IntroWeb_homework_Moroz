// Задача 2: Получить от пользователя два числа и 
// вывести в диалоговое окно сумму значений, которые ввел пользователь,
//  вывод должен выглядеть так (пример): 
// Результат сложения чисел 5 и 2 равен 7.

// function sumNumbers(n1, n2) {
//     return n1 + n2;
// }

// const num1 = Number.parseFloat(prompt('Введите первое число: '));
// const num2 = +prompt('Введите второе число: ');
// alert(`Результата сложения чисел ${num1} и ${num2} равен ${sumNumbers(num1+num2)}`);

// Задача 3: Написать функцию, 
// которая принимает имя пользователя при ее вызове 
// и выводит сообщение с приветствием пользователя по имени в консоль. 
// Проверить работоспособность функции

// function helloUser(name) {  
//     console.log(`Привет, ${name}`);
// }

// const user = prompt('Введите ваше имя');
// helloUser(user)

// Задача 4: вывести на экран в диалоговом окне т
// текст с сообщением “Вам хорошо живется?”
// и кнопками «ОК», «Отмена», для чего необходимо использовать confirm.
// - При нажатии на кнопку “ОК” вывести 
// в диалоговом окне текст с сообщением “Тогда мы идем к вам!”.
// - При нажатии на кнопку “Отмена” вывести 
// в диалоговом окне текст с сообщением “Ну вы держитесь там!”.

// let answer = confirm('Вам хорошо живется?');
// if (answer) {
//     alert('Тогда мы идем к вам!');
// } else {
//     alert('Ну вы держитесь там!');
// }
 //answer ? alert('Тогда мы идем к вам!') : alert('Ну вы держитесь там!');
 //alert(answer ? 'Тогда мы идем к вам!' : 'Ну вы держитесь там!');

//  Задача 5: перепишите код, используя конструкцию switch-case, запрашивая продукт через диалоговое окно.
 
// <script>
// let product = "Бананы";
 
// if (product == "Мандарины") {
//   alert('Мандарины стоят 100 руб/кг.');
// } else if (product == "Бананы") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else if (product == "Груши") {
//   alert('Бананы и груши стоят 70 руб/кг.');
// } else {
//   alert('Нет такого продукта.');
// }
// </script>

// let product = 'Бананы'

// switch (product.toLowerCase()) {
//     case 'мандарины':
//         alert('Мандарины стоят 100 руб/кг.');
//         break;
//     case 'бананы':
//         alert('Бананы и груши стоят 70 руб/кг.');
//         break;
//     case 'груши':
//         alert('Бананы и груши стоят 70 руб/кг.');
//         break;
//     default:
//         alert('Нет такого продукта.'); 
// }

// Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемента массива, 
// который записан в четном индексе включая 0.
 
function getMaxEvenElement(arr) {
    let maxNum = arr[0]
    for (let i = 2; i < arr.lenght; i+=2) {
        if (arr[i] > maxNum){
            maxNum = arr[i];
        }
    }
    return maxNum

}
 
console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31

// function getMaxEvenElement(arr) {
//     return Math.max(...arr.filter((_, i) => i % 2 == 0));
// }
// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
// console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31
