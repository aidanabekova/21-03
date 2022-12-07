// повторение
const month = prompt('введите месяц рождения: ')
const day = prompt('введите день рождения: ')
if ((month === 'март' && day >= 21 && day <= 31) || (month === 'апрель' && day >= 1 && day <= 20)) {
    console.log('ваш знак зодиака Овен');
}


// var customerLogin = "bekovaA";
// var customerPassword = "123qwerty";
// var loginInput = prompt("Login:");
// var passwordInput = prompt("Password:");
// if (loginInput === customerLogin && passwordInput === customerPassword) {
//   alert("Welcome " + customerLogin);
// } else {
//   console.error("Auth error");
// }
// var customerIdentificationNumber = "10810200300758";
// var customerInnFirstChar = Number(customerIdentificationNumber[0]);
// if (
//     (customerInnFirstChar === 0 ||
//         customerInnFirstChar === 1 ||
//         customerInnFirstChar === 2) &&
//     customerIdentificationNumber.length === 14
// ) {
//     console.log("INN is valid");
// }
    var size = "S";
    var euSize = 0;
    if (size === "S") {
        euSize = 36;
    } else if (size === 'M') {
        euSize = 42;
    } else if (size === "L") {
        euSize = 48;
    } else if (size === 'XL') {
        euSize = 48
    } else {
        euSize = 1;
    }
    console.log('european size - ', euSize);
//выполнение кода выше с помощью switch..case
    switch (size) {
        case 's':
        case 'S':
            console.log('Small');
            break;
        case 'm':
        case 'M':
            console.log('Medium');
            break;
        case 'l':
        case 'L':
            console.log('Large');
            break;
        default:
            console.log('Unknown size')
    }

// var q = true + true + true + true + true
// console.log(q)
    const users = [
        {
            username: 'Jack',
            salary: 500
        },
        {
            username: 'John',
            salary: 5000
        },
        {
            username: 'Aibek',
            salary: 10000
        }
    ]
    const filteredUsers = users.filter(user => user.salary > 500)
    console.log(filteredUsers)

    var laptop = {
        vendor: 'MacBook',
        model: 'Air 2020',
        RAM: '8gb',
        CPU: {
            vendor: 'cheap m1'
        },
        turnOn: function () {
            console.log('Laptop is working...');
        },
        turnOff: function () {
            console.log("Laptop is shutting down...");
        }
    }
    laptop = {}  //это не пустой объект, это объект у которого нет свойств и методов
    console.log(laptop.model, laptop.vendor)
// laptop.turnOn()


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