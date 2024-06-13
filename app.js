// const myNumbers = [3, 5, -4, 8, 11, -1, 6];
// const sum = 10;
// function findSum() {

// }

// const arr = [1, 2, 3, 4, 5, 6]

// function reverse(arr) {
//     let len = arr.length
//     for (let i = 0; i < arr.length / 2; i++) {
//         let tmp = arr[i]
//         arr[i] = arr[len - 1 - i]
//         arr[len - 1 - i] = tmp
//     }
// }
// reverse(arr)
// console.log(arr)

// const data = [0, 1, false, 2, undefined, '', 3, null];
// function filter(arr, func) {
// }
// function callBack2(el) {

// }

// const data2 = [1, 2, 1, 2, 3];

// function uniqItem(arr) {
//     const newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!newArr.includes(arr[i])) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// console.log(uniqItem(data2))

// const arr = [2, 3, 4, 4, 5, 5]
// function betterThanAverage(classPoints, yourPoints) {
//     const classSum = classPoints.reduce((acc, b) => acc + b, 0)
//     const averPoint = classSum / classPoints.length
//     return yourPoints > averPoint ? true : false
// }
// const result = betterThanAverage(arr, 5)
// console.log(result)

const arr = [1, 2]
function sumArray(arr) {
    if (arr.length < 2 || arr == null) {
        return 0
    }
    arr.sort((a, b) => a - b)
    let sum = 0
    for (let i = 1; i < arr.length - 1; i++) {
        sum += arr[i]
    }
    return sum
}

// const arr2 = [[10, 0], [3, 5], [5, 8]]
// // const arr3 = arr2.reduce((acc, i) => acc + i[0] - i[1], 0)
// function bus(arr) {
//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i][0]
//         total -= arr[i][1]
//     }
//     return total
// }
// console.log(bus(arr2))



// const login = new Promise((resolve, reject) => {
//     const password = prompt('Введите пароль',)
//     if (password === '123') {
//         return resolve()
//     } else {
//         return reject(new Error('Пароль неверный'))
//     }
//     // setTimeout(() => resolve('Hai'), 1500);
//     // setTimeout(() => reject(new Error('Woops!')), 1500);
// })

// login
//     .finally(() => alert("Четкость точика под сомнением!"))
//     .then(() => window.open('https://www.codewars.com/dashboard'))
//     .catch(error => console.log(error.name, error.message))
//     .finally(() => alert("Точик в тильте"))


