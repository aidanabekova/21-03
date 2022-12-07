//создание переменных
// var name = 'Aidana';
// var surname = 'Bekova';
// console.log('мое ФИО - ', surname + ' ' + name);

//Типы данных
//1)string - строка
var nameUser = 'Aidana';
var surnameUser = 'Bekova';
var lastNameUser = 'Bekovna';
//concatenation-конкатенация строк
var fullnameUser = surnameUser + ' ' + nameUser + ' ' + lastNameUser
console.log(fullnameUser);

//escaping - экранирование строк
var directionInProgramming = 'Разработка сайтов'
var profession = 'Frontend-разработка'
console.log('Сфера разработки - '+ directionInProgramming, ',\n\tа именно - ' + profession)

//2)number - число
var number = 996765456234;
console.log('number =>', typeof number)
var number2 = number.toString()
console.log('number => ', typeof number2)
// var age = '22';
// console.log(typeof age) typeof - функция, которая показывает тип данных

var firstTime = 22;
var secondTime = 15;
var timeIsNow = firstTime + ':' + secondTime;
console.log('time -', timeIsNow)
console.log(typeof timeIsNow)

//математические действия -, +, %, /, *, **
// console.log('50 - 10 =', num1 - num2)
// console.log('50 + 10 =', num1 + num2)
// console.log('50 / 10 =', num1 / num2)
// console.log('50 * 10 =', num1 * num2)
// console.log('50 ** 10 =', num1 ** num2)
// console.log('9 % 2 =', num1 % num2)

// console.log('средний возраст группы 21-03 - ', (32 + 17 + 27 + 18 + 19 + 40 + 20 + 20 + 17 +
// 19 + 21 + 28 + 31 + 17 + 17 + 16 + 22 + 17 + 19) / 19, 'года')

// var num1 = Number.parseInt(prompt('Enter number 1: '));
// var num2 = Number.parseInt(prompt('Enter number 2: '));
// console.log('First number:', num1);
// console.log('First number:', num2);
// console.log('+', num1 + num2);

//3)boolean - логический тип данных, true or false
//man - true, women - false
var manOrWomen = false;
if(manOrWomen){
    console.log('Дорогой')
}else{
    console.log('Дорогая')
}
var num1 = 9;
var num2 = 2;
// console.log(num1 === num2); //=== - строгое сравнение
//>, <, ===, >==, <==, !==
// console.log(num1 > num2)
// console.log(num1 < num2)
// console.log(num1 < num2)
// console.log(num1 === num2)
// console.log(num1 !== num2)
var num3 = 15;
var num4 = '15';
// console.log(num3 == num4); //== - нестрогое сравнение

// var name = prompt('введите свое имя: '); //aidana
// var surname = prompt('введите свою фамилию: ');//bekova
// var age = prompt('введите свой возраст');//34
//условные операторы if, else if, else
// if(age <= 18){
//     console.log('Хай', name);
// }else if(age >= 19 && age <= 40  ){ //&& - и || или
//     console.log('Здравствуйте!', surname + ' ' + name)
// }else if( age >= 40 && age <= 80){
//     console.log('Добро пожаловать!')
// } else {
//     console.error('error age')
// }




