// !Задание 1
// Напишите функцию checkTask(fullName), принимающую в аргументы массив вида:
// ["Julius", "Caesar", "Consul", "of the Roman Republic"] 
// Вам надо поместить в переменную firstName первый элемент массива, а в переменную titul последний элемент.
// Выведите в консоль эти две переменные через запятую - console.log(firstName, titul):
// Julius of the Roman Republic

// function checkTask(fullName){
//     let [firstName,,, titul] = fullName
//     console.log(firstName, titul)
// }


// !Задание 2
// Создайте функцию checkTask(obj), принимающую в аргументы объект вида:
// {name: 'Петр', surname: 'Петров', age: '20 лет'} 
// Функция должна записать соответствующие значения в переменные name, surname и age и вывести их в одном вызове консоли через запятую в таком виде:
// console.log(name, surname, age)  


// function checkTask(fullName){
//     let[firstName, lastName] = fullName.split(' ')
//     console.log(firstName, lastName)
// }

// !Задание 4
// function checkTask(obj){
//     let {name, surname, age} = obj
//     console.log(name, surname, age)
// }

// !Задание 5
// Создайте функцию checkTask(obj), принимающую в аргументы объект вида:
// { hello: “World”, apple: “iPhone”, java: “script” } 
// Функция должна поместить в переменные hello и apple первые два свойства.
// Последнее свойство объекта должно быть помещено в переменную java c помощью оператор spread оператора(...rest).
// Также, функция должна вывести последнее свойство в консоль.

// function checkTask(obj){
//     let{hello, apple, ...java} = obj
//     console.log(java)
// }
// checkTask({ hello: 'World', apple: 'iPhone', java: 'script'})

// !Задание 6
// Создайте функцию checkTask(a, b), принимающую в аргументы два числа.
// Функция должна поменять местами значения переменных и вывести в консоль.
// Например, в аргументы приходят a = 0, b = 1, после перестановки, вызывая через console.log(a, b), функция выведет: 1, 0 

// function checkTask(a, b) {
//     [b, a] = [a, b];
//     console.log(a, b);
//   }

// !Задание 7
// Создайте функцию checkTask(arr), принимающую в аргументы массив вида:
// ['первый', 'второй', 'третий'] 
// Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3.
// Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee', а если нет второго - в переменную elem2 запишите значение 'bbb'.
// Выведите elem2 и elem3 в одном console.log'е через запятую:
// console.log(elem2, elem3)
// Первый элемент никуда записывать не надо.