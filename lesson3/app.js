laptop = {}  //это не пустой объект, это объект у которого нет свойств и методов
/*классы(виды) операторов:
1) унарные операторы - они работаю всегда с одной переменной, отсюда и название УНАрные, например: ! (лог-ое не),
 + (преобразование строки в число), - (просто положительное число превращает в отрицательное)
2) бинарные операторы - они работаю уже с двумя аргументами, например: + (складывает числа либо строки) и т.д и т.п
3) тернарные операторы -
* */

// let playerColor = false
// if(playerColor){
//     console.log('You start')
// }else{
//     console.log('Wait your enemy...')
// }
// по-другому это выглядело бы так:

// console.log(playerColor ? "You start..." : "Wait your enemy")


// var manOrWomen = true;
// if(manOrWomen){
//     console.log('Дорогой')
// }else{
//     console.log('Дорогая')
// }
// var d = manOrWomen ? 'Дорогой' : 'Дорогая'
// console.log(d)

//truthy and falsy выражения - это означает, что мы можем использовать обычные типы данных и
// JS сам попытается их превратить в логическое
//есть falsy-выражение, некий ограниченный список,а truthy-это все то, что не входит в falsy.
//falsy: false, 0, "", '', ``, undefined, null, NaN, -0, 0n

// var isReady = 1;
// console.log(isReady ? 'True' : 'False');

//Array - массив
// var numbers = [4, 2, 7, 4, 9, 1, 0, 3, 4, 6, 5, 7, 8];
// console.log(numbers.sort())  //функция сортировки массивов
// var others = [
//     true,
//     {},
//     null,
//     undefined,
//     'Max',
//     48,
//     {login: '', password: ''}
// ];

// var fruits = ['banana', 'orange', 'pineapple', 'raspberry'];
// console.log(fruits[0][0]); //первая бувка первого объекта
// console.log('Qwerty'[3]);  //3 буква слова qwerty
// console.log(fruits[0]); //первый элемент в массиве
// console.log(fruits[fruits.length - 1]); //последний элемент в массиве
// console.log(fruits.length); //длина массива


//методы массива
// fruits.push('apple', 'cherry'); //добавляет новый элемент в конец массива
// var firstFruit = fruits.shift();
// console.log(firstFruit);  //вытаскивает первый элемент из массива и удаляет его
// var fruitsAdd = fruits.unshift('apple', 'cherry', 'strawberry');console.log(fruitsAdd); //добавляет элементы в начало массива
// fruits.splice(0, 3); //удаляет элементы с какого-то индекса, в нашем случае с 0 индекса удалит 3 элемента
// var deletedFruits = fruits.splice(fruits.length - 3); //удалит 3 элемента с конца массива
// var lastFruits = fruits.pop()   //вытаскивает последний элемент из массива и удаляет его
// var d = fruits.join()//преобразует все элементы массива в строки и объединяет их в одну большую строку.
// console.log(typeof d)
//
// let matrix = [
//
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//
// ]
// console.log(matrix[2][1])
//
// const users = [
//     {
//         username: 'Jack',
//         salary: 500
//     },
//     {
//         username: 'John',
//         salary: 5000
//     },
//     {
//         username: 'Aibek',
//         salary: 10000
//     }
// ]
// const filteredUsers = users.filter(user => user.salary > 500)
// console.log(filteredUsers)

//Цикл while и do...while
// var fruits = ['banana', 'orange', 'pineapple', 'raspberry'];
// //                0        1           2               3
// var fruitForFound = "raspberry";
// var i = 0;
// //цикл с предусловием
// while (i < 5) {
//     if (fruits[i] === fruitForFound) console.log("Fruit found on index", i);
//     i++; // i = i + 1; i+= 1
// }

// while (fruits[i] !== 'raspberry'){
//     console.log(fruits[i]);
//     i++;
// }


//
//цикл с постусловием
// var num = 0;
// do {
//     console.log(num)
//     num++
// }while(num < 5);

// // Do while нужно использовать, когда надо чтобы хотя бы одна итерация произошла и хоть какое-то значение вернулось.
// //бесконечные циклы: while(true){}, for(;;)

var blackList = ['ksenya', 'anna', 'max', 'john', 'rain'];
// var name;
// do {
// name = prompt('What is your name?');
// } while (name === '' || blackList.includes(name.toLowerCase()));//это цикл ,который не будет работать дальше, пока ты что-то не введешь в prompt
// console.log('Your name is', name);
// includes это метод массива в жс,в который мы передаем что-то , а он говорит есть такой элемент в массиве или нет

// break continue

var names = ["eugene", "aidar", "ksenya", "anna", "olya", 'john'];

for (var i = 0; i < names.length; i++) {
  if (blackList.includes(names[i].toLowerCase())) {
    console.warn(`${names[i]} ${i} in blacklist!!!`);
    continue;
  }
  console.log(`Welcome, dear guest ${names[i]}`);
}

// var newWord = '';
// for (const letter of 'object') {
//     newWord += letter + '-';
// }
// console.log(newWord);

// for (var i = 1; i <= 12; i++) {
//     var month;
//     var currentMonth = new Date().getMonth() + 1;
//     if (currentMonth === i) continue;
//     switch (i) {
//         case 1:
//             month = "January";
//             break;
//         case 2:
//             month = "February";
//             break;
//         case 3:
//             month = "March";
//             break;
//         case 4:
//             month = "April";
//             break;
//         case 5:
//             month = "May";
//             break;
//         case 6:
//             month = "June";
//             break;
//         case 7:
//             month = "July";
//             break;
//         case 8:
//             month = "August";
//             break;
//         case 9:
//             month = "September";
//             break;
//         case 10:
//             month = "October";
//             break;
//         case 11:
//             month = "November";
//             break;
//         case 12:
//             month = "December";
//             break;
//     }
//     console.log((i === 1 ? "Year starts with " : "Then ") + month);
// }

//Задача на удаление дубликатов из массива
//первый вариант решения
// var array = [1, 2, 2, 3, 4, 5, 3, 5, 6, 6];
// var distinct = [];
// for (const item of array) {
//     if (distinct.includes(item)) continue;
//     distinct.push(item);
// }
// console.log(distinct);
// //второй вариант решения
// var distinct2 = Array.from(new Set(array));   //решение в одну строку.Объяснение: set - это множество,где хранятся только уникальные данные
// //и вот с помощью nw Set мы создали новое множество и внутрь закинули наш список с цифрами ,я затем переопределили множество в список с помощью Array.from
// console.log(distinct2);





