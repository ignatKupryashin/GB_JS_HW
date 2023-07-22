// Задание 1
// Создайте функцию которая возводит переданное число в куб,
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const task1 = () => {

    /**
     *
     * @param inputNumber Число, которое возводим в степень
     * @param degree Степень, в которую возводим
     * @returns {number}
     */
    const toDegree = (inputNumber, degree) => {
        return inputNumber ** degree;
    }
    console.log(toDegree(2,3) + toDegree(2, 3));
}
// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо
// вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и
// выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"


const task2 = () => {
    /**
      * @param salary Сумма зарплаты до вычета налогов
     * @param tax Размер процента налога в формате целого числа
     * @returns {number}
     */
    const netSalary = (salary, tax) => {
        return salary * (1 - tax / 100)
    }

    const inputData = +prompt("Введите свою Заработную плату");
    if (!Number.isNaN(inputData)){
        console.log(`Размер заработной платы за вычетом налогов равен ${netSalary(inputData, 13)}`);
    }
    else {
        console.log("Значение задано неверно")
    }

}

// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию,
// которая определяет максимальное значение среди этих чисел

const task3 = () => {
    /**
     * Функция находит максимальное число из трёх чисел
     * @param inputNumber1
     * @param inputNumber2
     * @param inputNumber3
     * @returns {number}
     */
    const max = (inputNumber1, inputNumber2, inputNumber3) => {
        return Math.max(inputNumber1, inputNumber2, inputNumber3);
    }
    const input1 = prompt("Введите первое число");
    const input2 = prompt("Введите второе число");
    const input3 = prompt("Введите третье число");
    
    alert(`Максимальное введенное число ${max(input1, input2, input3)}`)
}

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать
// по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6));
// должно вывести число 8 в консоль (sum - функция сложения в данном примере,
//     ваши названия функций могут отличаться). Округлять значения,
//     которые возвращают функции не нужно, однако, обратите внимание на разность,
//     функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны.
//     Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.


const task4 = () => {
    /**
     * Функция сложения двух чисел
     * @param inputNumber1
     * @param inputNumber2
     * @returns {*}
     */
    const sum = (inputNumber1, inputNumber2) => {
        return inputNumber1 + inputNumber2;
    }

    /**
     * Вычитает из большего введенного числа меньшее
     * @param inputNumber1
     * @param inputNumber2
     * @returns {number} Разница
     */
    const dif= (inputNumber1, inputNumber2) => {
            if (inputNumber1 > inputNumber2) {
                return (inputNumber1 - inputNumber2);
            }
            else {
                return (inputNumber2 - inputNumber1);
            }
    }

    /**
     * Функция умнождения
     * @param inputNumber1 Первый множитель
     * @param inputNumber2 Втрой множитьель
     * @returns {number}
     */
    const mult = (inputNumber1, inputNumber2) => {
        return inputNumber1 * inputNumber2;
    }
    /**
     * Функция деления.
     * @param inputNumber1 Делимое
     * @param inputNumber2 Делитель
     * @returns {string|number} Возвращает число.
     * Строка возвращается только в случае inpitNumber2 == 0
     */
    const devide = (inputNumber1, inputNumber2) => {
        if (!inputNumber2){
            return "На ноль делить нельзя";
        }
        else {
            return (inputNumber1 / inputNumber2);
        }
    }
    const number1 = 5;
    const number2 = 6;
    const numberNull = 0;
    console.log(sum(number1, number2));
    console.log(dif(number1, number2));
    console.log(mult(number1, number2));
    console.log(devide(number1, number2));
    console.log(devide(number1, numberNull));
}


//Запуск заданий
task1();
task2();
task3();
task4();