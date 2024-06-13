
// // const arr = [1, 2, 3, 4, 5]
// // function closesAvg(arr) {
// //     let result = 0
// //     let averNum;
// //     const len = arr.length
// //     for (let i = 0; i < arr.length; i++) {
// //         result += arr[i];
// //     }
// //     averNum = result / len

// //     let difference;
// //     let closesNum = arr[0]
// //     let minimalDiff = Math.abs(arr[0] - averNum);
// //     for (let i = 1; i < arr.length; i++) {
// //         if (arr[i] > averNum) {
// //             difference = arr[i] - averNum
// //         } else {
// //             difference = averNum - arr[i]
// //         }
// //         if (difference < minimalDiff) {
// //             minimalDiff = difference
// //             closesNum = arr[i]
// //         }
// //     }
// //     return closesNum

// // }
// // console.log(closesAvg(arr))



// // squareSum(data)

// // console.log('1111')

// // const data = [1, 2, 3, 4, 5]
// // let min = data[0]
// // let max = data[0]
// // for (let i = 0; i < data.length; i++) {
// //     if (data[i] < min) min = data[i]

// //     if (data[i] > max) max = data[i]
// // }


// // console.log(min)
// // console.log(max)



// // const data = [1, 2, 4, 0, 3, 0, 1]

// // function moveZero(arr) {
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] == 0) {

// //         }
// //     }
// //     return arr
// // }
// // console.log(moveZero(data))

// const arr = [1, 2, 300, 4]

// function shift(arr, pos) {
//     const tmp = arr[pos]
//     // if (arr[pos] == arr.length + 1) return

//     for (let i = pos; i < arr.length; i++) {
//         arr[i] = arr[i + 1]
//     }
//     arr[arr.length - 1] = tmp
// }


// console.log(shift(arr, 200))
// console.log(arr)


// const sortList = function (head) {
//     for (let i = 0; i < head.length; i++) {
//         for (let j = 0; j < head.length - 1; j++) {
//             if (head[j] > head[j + 1]) {
//                 [head[j], head[j + 1]] = [head[j + 1], head[j]]
//             }

//         }
//     }
//     return head
// };

// console.log(sortList(arr))


// const arr = [1, 2, 3, 4, 5]
//     .filter(item => item > 3)
//     .map(item => item ** 2)

// function reduce(arr, func, initialValue) {
//     let result = initialValue
//     for (let i = 0; i < arr.length; i++) {
//         result = func(result, arr[i])
//     }
//     return result
// }
// function callback(acc, item) {
//     return acc += item
// }
// console.log(reduce(arr, callback, 0))

// function find(str, substr) {

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== substr[0]) continue;
//         let flag = true;
//         for (let j = 0; j < substr.length; j++) {
//             if (str[i + j] !== substr[j]) {
//                 flag = false
//                 break;
//             }
//         }
//         if (flag) {
//             return true
//         }
//     }
//     return false

// }


// function squareDigits(num) {
//     const str = String(num)
//     let result = ''
//     for (let i = 0; i < str.length; i++) {
//         let square = str[i] ** 2
//         result += square
//     }
//     return Number(result)
// }

// console.log(squareDigits(1234))


// function highAndLow(arr) {
//     arr += ' '
//     let min;
//     let max;
//     let acc = '';
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== ' ') {
//             acc += arr[i]
//         }
//         if (arr[i] == ' ') {
//             let currentNum = +acc
//             console.log(acc)
//             acc = ''
//             if (!min && !max) {
//                 min = currentNum
//                 max = currentNum

//             }
//             // if (min > currentNum) {
//             //     min = currentNum
//             // }
//             // if (max < currentNum) {
//             //     max = currentNum

//             // }
//             min = Math.min(currentNum, min)

//         }

//     }
//     return `${max} ${min}`
// }
// console.log(highAndLow('228 -5 6 72'))





