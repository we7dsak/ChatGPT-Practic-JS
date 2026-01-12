// --------------------ПРОСТІ ЗАДАЧКИ------------------------------


// <!-- 1
// Напиши функцію sumNumbers(a, b), яка приймає два числа і повертає їхню суму.

// function sumNumbers(a, b){
//     return a + b
// }

// console.log(sumNumbers(5, 7)); // 12 -->
// console.log(sumNumbers(5, 13)); // 18 -->
// console.log(sumNumbers(167, 259)); // 426 -->

// <!-- 2
// Напиши функцію isEven(number), яка повертає "Парне", якщо число парне, і "Непарне", якщо ні.

// function isEven(number){
//     if (number % 2 === 0)
//         return "Парне"
//     else
//         return "Непарне"
// }

// console.log(isEven(17));// "Непарне"
// console.log(isEven(144));// "Парне"
// console.log(isEven(4)); // "Парне"
// console.log(isEven(7)); // "Непарне" -->


// <!-- 3
// Напиши функцію sayHello(name), яка приймає <ім'я> користувача і повертає фразу
// "Привіт, <ім'я>!"

// function sayHello(name) {
//     return `Привіт, ${name}`
// }

// console.log(sayHello("Оля")); // "Привіт, Оля!" -->
// console.log(sayHello("Віка"));// "Привіт, Віка!" -->
// console.log(sayHello("Толя")); // "Привіт, Толя!" -->

// <!-- 4
// Напиши функцію isPositive(number), яка:
// повертає "Додатне", якщо число більше 0;
// "Від'ємне", якщо менше 0;
// "Нуль", якщо дорівнює 0.

// function isPositive(number) {
//     if (number > 0)
//         return "Додатне"
    
//     else if  (number < 0)
//         return "Від'ємне"
        
//     else
//     return "Нуль"
// }

// function isPositive(number) {
//     return number > 0 ? "Додатне" : number < 0 ? "Від'ємне" : "Нуль";
// }

// console.log(isPositive(5));   // "Додатне"
// console.log(isPositive(-1));  // "Від'ємне"
// console.log(isPositive(0));   // "Нуль"

// <!-- 5
// Напиши функцію getStringLength(str),
// яка приймає рядок і повертає кількість
// символів у ньому.

// function getStringLength(str) {
//     return str.length
// }
    
// console.log(getStringLength("JavaScript")); // 10

// --------------------СЕРЕДНІ ЗАДАЧКИ------------------------------

// <!-- 1
// Напиши функцію getArraySum(numbers), яка приймає масив чисел і повертає їхню суму.

// function getArraySum(numbers) {
//     let total = 0;
  
//     for (let i = 0; i < numbers.length; i++) {
//          total += numbers[i];
//    }
    
//    return total
        
    

// }

// console.log(getArraySum([2, 4, 6, 8])); // 20

// console.log(getArraySum([88, 87, 4, 56])); // 235 -->


// <!-- 2

// Напиши функцію countVowels(str), яка приймає рядок
//  і повертає кількість голосних букв (a, e, i, o, u, а, е, є, и, і, о, у, я, ю).

// function countVowels(str) {
//     let total = 0;
//     const wowo = "аеєиіїоуюяaeiou"

//     for (let i = 0; i < i.length; i++) {
//         const element = array[i];
        
//     }
// }

// console.log(countVowels("привіт")); // 2 -->

// <!-- 3
// Напиши функцію getEvenNumbers(numbers), яка:
// приймає масив чисел;
// повертає новий масив, що містить тільки парні числа.
// ⚠️ Використовуй цикл for (без filter).

// function getEvenNumbers(numbers) {
//     let arr = [];

//     for (let index = 0; index < numbers.length; index++) {
//         if (numbers[index] % 2 === 0 )
//             arr.push(numbers[index])
        
//     }
//     return arr
// }

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); 
// [2, 4, 6]