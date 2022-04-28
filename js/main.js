//! Массив
//* Task
// let list = [
//     'Milk',
//     'Sugar',
//     'Salt',
//     'Butter',
//     'Bread'
// ]

// let [first, second, ...other ] = list
// console.log(first, second, other);

// ! Вложенный массив 
//*Task 2
// let arr = [
//     [1,2,3,4, [9, 0]],
//     [5,6,7,8]
// ]

// let [[a, b, c, d, [nine, zero]], [newArr, ...other]] = arr
// console.log(a, b, c, d, newArr, other);
// console.log(nine, zero);

// ! Объект
// *Task 3

// let person = {
//     age: 30,
//     name: 'John',
//     lastName: 'Snow'
// }
// let {age, name, lastName} = person
// console.log(age, name, lastName);

// ! Вложенный объект
// *Task 4

// let obj1 = {
//     subObj:{
//       name: 'Jack'  
//     }
// }
// let {subObj: {name}} = obj1
// console.log(name);

// ! Объект + массив
//*Task 5

// let obj = {
//     arr: [
//         {
//             name:'Makers'
//         }
//     ]
// }

// let {arr: [{name}]} = obj 
// console.log(name);


// ! Функция
//*Task6

// function foo ({name, age}){
//     console.log(name);
//     console.log(age);
// }

// let person = {
//     name: 'Makers',
//     lastNAme: 'Bootcamp',
//     age: 3
// }

// foo(person)


// ! Task7 (сложнее примеры)
// Вытащить определенные элементы массива

// let arr = [1,2,3,4,5]
// let [,,,four, five] = arr 
// console.log(four, five);

// ! Spread operator
// *Task8

// function foo (a, b, c, d) {
//     console.log(a, b, c, d);
// }
// let arr = [1,2,3,4,5]
// foo(...arr)


// *Task9

// let a = {
//     age: 20
// }
// let b = {...a}
// b.age = 25 

// console.log(a === b);


// *Task10

// let obj1 = {
//     name: 'Kamila',
//     color: 'green'
// }

// let obj2 = {
//     lastName: 'IBK'
// }

// let {color} = obj1 
// let newObj = {...obj1, ...obj2}
// console.log(newObj);

// ! Сложная деструктуризация
// *Task11 
// let obj = {
//     name: 'Kani',
//     age: 22,
//     position: [
//         'Mentor',
//         'Backend-developer',
//         'Blogger'
//     ],
//     dog: {
//         name: 'Oreo',
//         age: 2
//     }
// }

// let {
//     name,
//     age,
//     position: [
//         firstposition,
//         secondposition,
//         ...otherposition
//     ],
//     dog: {
//         name: dogName,
//         age: dogage
//     }
// }=obj

// console.log(name,age, firstposition, secondposition, otherposition, dogName, dogage);


// ! Сложная деструктуризация в функциях
// *Task12

// function sayHello ({name, age, dog: {name:dogName}}) {
//     console.log(`
//     Hello my name is ${name}
//     I am ${age} y.o.
//     I have a dog ${dogName}
//     `);
// }

// sayHello(obj)


// Todo  Деструктуризация. Класснная работа.

// Задание №1
// Дан массив [ "первый", "второй","третий", "четвертый","пятый","шестой","седьмой" ];
// Запишите первый элемент этого массива впеременную elem1,
// второй - в переменную elem2, третий - в переменную elem3,
// а все остальные элементы массива - в переменную arr.

// let task1 = [ "первый", "второй","третий", "четвертый","пятый","шестой","седьмой"]
// let [elem1, elem2, elem3, ...arr ] = task1 
// console.log(elem1, elem2, elem3, ...arr);


// Задание №2
//  Дан объект { name: "Петр", surname: "Петров", age: "20 лет" }.
// Запишите соответствующие значения в переменные name, surname и age.

// let task2 = { name: "Петр", surname: "Петров", age: "20 лет" }
// let {name, surname, age} = task2
// console.log(name, surname, age);


// Задание №3
// Дан массив.

// let task3 = [
//     "первый",
//     "второй",
//     "третий",
//     "четвертый",
//     "пятый",
//     "шестой",
//     "седьмой"
// ];

// Запишите последний элемент этого массива в переменную elem1,
// а предпоследний - в переменную elem2.

// let [,,,,, elem2, elem1] = task3
// console.log(elem2, elem1);


