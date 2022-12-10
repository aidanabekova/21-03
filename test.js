let day = prompt('Выберите день недели')

switch (day){
    case "Monday":
    case "monday":
        console.log('Понедельник')
        break
    case "Tuesday":
    case "tuesday":
        console.log('Вторник')
        break
    case "Wednesday":
    case "wednesday":
        console.log('Среда')
        break
    case "Thursday":
    case "thursday":
        console.log('Четверг')
        break
    case "Friday":
    case "friday":
        console.log('Пятница')
        break
    case "Saturday":
    case "saturday":
        console.log('Суббота')
        break
    case "Sunday":
    case "sunday":
        console.log('Воскресенье')
        break
    default:
        console.log('Попробуй еще раз!!!')
}