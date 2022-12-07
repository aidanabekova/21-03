/*
* djksvnckjnv
* vbf
* dfvbjhfdbv
* fbvhjdfv
* fdvbdf
* */
//повторение дз
// var day = Number(prompt('введите число рождения: '));
// var month = prompt('введите месяц рождения: ');
//
// if (day >= 21 && day <= 31 && month === 'март' ||  day <= 20  && month === 'апрель'){
//     console.log('ваш знак - овен')
// } else {
//     console.error('error')
// }

// var userLogin = 'bekovaA';
// var userPassword = 'qwerty12345';
// var authLoginUser = prompt('введите логин - ');
// var authPasswordUser = prompt('введите пароль - ');
// if (authLoginUser === userLogin && authPasswordUser === userPassword) {
//     console.log('ok')
// } else {
//     console.error('error')
// }

// var userINN = '10810200300750';
// var innFirstNumber = Number(userINN[0]);
// if ((innFirstNumber === 0 || innFirstNumber === 1 || innFirstNumber === 2) && userINN.length === 14) {
//     console.log('персональный номер найден!')
// } else {
//     console.log('персональный номер не найден!')
// }

var size = '';
// var euSize = 0;
// if(size === 'S'){
//     console.log('европейский размер -> ', euSize = 36)
// }else if(size === 'M' || size === 'm){
//     console.log('европейский размер -> ', euSize = 38)
// }else if(size === 'L'){
//     console.log('европейский размер -> ', euSize = 40)
// }else if(size === 'XL'){
//     console.log('европейский размер -> ', euSize = 42)
// }else {
//     console.log('unknow size')
// }
var d = "'Geektech' - курсы программирования"
console.log(d)

//этот же код через switch..case
// switch (size){
//     case 'XL':
//     case 'xl':
//         console.log('европейский размер xl - 42')
//         break;
//     case "L":
//     case 'l':
//         console.log('европейский размер l - 40')
//         break;
//     case "M":
//     case 'm':
//         console.log('европейский размер m - 38')
//         break;
//     case "S":
//     case 's':
//         console.log('европейский размер s - 36')
//         break;
//     default:
//         console.log('unknow size');
// }

//4) undefined - неопределенный тип данных
let name;
console.log(typeof name)

//5) null - нулевой тип данных
var surname = null;
console.log(typeof surname)

// 6)object - объект(комплексный тип данных)
var user = {
    name: 'Aidana',
    surname: 'Bekova',
    phoneNumber: '0708902334',
    age: 19,
    secondNumber: undefined,
    adres: null,
    isMarried: false,
    frontend: {
        month: 'JS1'},

};
console.log(user.name, user.surname)
console.log(user.frontend.month)

//NaN - not a number
var a = 12;
var b = 'qwerty'
console.log(a / b)
console.log(typeof NaN)

var nameUser = 'Aidana';
var surnameUser = 'Bekova';
var lastNameUser = 'Bekovna';
//concatenation-конкатенация строк
var fullnameUser = surnameUser + ' ' + nameUser + ' ' + lastNameUser
console.log(fullnameUser);

//escaping - экранирование строк
var directionInProgramming = 'Разработка сайтов'
var profession = 'Frontend-разработка'
console.log('Сфера разработки - '+ directionInProgramming, '\n\tа именно - ' + profession)






