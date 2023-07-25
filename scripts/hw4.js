// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
//     0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

const task1 = () => {
    let description;
    for (let i = 0; i < 11; i++) {
        if (i === 0){
          description = "это ноль";
        }
        else {
            description = (i % 2 === 0) ? "четное число" : "нечетное число";
        }
        console.log(`${i} - ${description}`)
    }
}

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const task2 = () => {
    const myArray = [1, 2, 3, 4, 5, 6, 7];
    const answer = myArray.filter(item => (item !== 4 && item !== 5))
    console.log(answer);
}

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число

const task3 = () => {
    const makeArray = (length) => {
       const myArray = [];
        for (let i = 0; i < length; i++) {
            myArray.push(Math.floor(Math.random() * 9))
        }
        return myArray;
    }

    const myArray = makeArray(5);
    console.log(myArray);
    const sum = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(`Сумма = ${sum}`);
    const min = myArray.reduce((min, currentData) =>  currentData < min ? currentData : min, 9);
    console.log(`Минимум = ${min}`);
    const myNumber = myArray.find(item => typeof item === "number");
    console.log(`Первый попавшийся number в массиве = ${myNumber}`);
}

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
//
// x
// xx
// xxx
// xxxx
// xxxxx


const task4 = () => {
    let line = "";
    for (let i = 0; i < 20; i++) {
        line += "x";
        console.log(line);
    }
}

task1();
task2();
task3();
task4();