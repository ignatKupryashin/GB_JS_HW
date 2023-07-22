// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

const task1 = () => {
    const num1 = +prompt("Введите первое число");
    const num2 = +prompt("Введите второе число");
    alert((num1 <= 1)
        ? "Переменна num1 равна или меньше 1"
        : "Переменная num1 не подходит условиям задачи");
    alert((num2 >= 3)
        ? "Переменна num2 больше или равна 3"
        : "Переменная num2 не подходит условиям задачи");
}

// Задание 2
// Перепишите код к тернарному оператору
//
// let test = true;
// if (test === true) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

const task2 = () => {
    let test = true;
    test ? console.log("+++") : console.log('---')
}


// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

const task3 = () => {
    const day = Math.floor(Math.random() * 31) + 1;
    let decade;
    if (day < 11){
        decade = 1;
    }
    else if (day < 21){
        decade = 2;
    }
    else decade = 3;

    console.log(`Число ${day} находится в ${decade} декаде.`);
}

// Задание 4
// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

const task4 = () => {
    const inputNumber = +prompt("Введите число");
    const dataNumber = inputNumber % 1000;
    const getCategory = (checkingNumber, neededCategory) => {
        return Math.floor(checkingNumber / neededCategory) % (10);
    }

    alert(`В числе ${inputNumber}: 
    ${getCategory(dataNumber, 100)} сотен
    ${getCategory(dataNumber, 10)} десятков
    ${getCategory(dataNumber, 1)} единиц`)
}


//Запуск заданий
task1();
task2();
task3();
task4();