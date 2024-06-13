// // const arr2 = [1, 2, 3]

// // function map(arr, func, data, data2) {

// //     let newArray = []

// //     for (let i = 0; i < arr.length; i++) {
// //         const result = func(arr[i], i)
// //         newArray.push(result)
// //     }

// //     return newArray
// // }


// // const callBack = (curEl, index, arr) => {
// //     return curEl > 1
// // }

// // function filter(arr, func) {
// //     const newArr = []
// //     for (let i = 0; i < arr.length; i++) {
// //         const result = func(arr[i], i, arr)
// //         if (result == true) newArr.push(arr[i])
// //     }
// //     return newArr
// // }

// // // const arr3 = arr2.map(callBack)
// // // console.log(arr3)

// // const arr4 = filter(arr2, callBack)

// // const arr5 = []

// // for (let i = 0; i < arr2.length; i++) {
// //     // arr5[i] = arr2[i] * 2;
// //     arr5.push(arr2[i] * 2)
// // }

// // function a(num, func) {
// //     console.log('start')
// //     console.log('lox')

// //     console.log(func(2) * 3)

// // }

// // function b(num) {
// //     return num * 3
// // }

// // a(5, b)



// // const arr = [
// //     'Sasha',
// //     {
// //         type: 'JS',
// //         age: 26
// //     },
// //     true,
// //     function () {
// //         return 'good'
// //     },

// // ];

// // console.log(arr)
// // console.log(arr[1].age)
// // console.log(arr[2])
// // console.log(arr[3]());

// // const array = [
// //     [1, 2, 4],
// //     [2, 3, 4],
// //     [3, 5, 6],
// // ]

// // console.log(array[0][2])
// // console.log(array[1][0])
// // console.log(array[2][1])
// // console.log(array)



// let arr = [1, 5, 4, 3, 2]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         bobbls(arr[j], j)
//     }
// }

// function bobbls(el, i) {
//     let anoEl;
//     let currEl = el;
//     const nextIndex = i + 1
//     let nextEl = arr[nextIndex]
//     if (currEl > nextEl) {
//         anoEl = currEl;
//         currEl = nextEl;
//         nextEl = anoEl;
//         arr[i] = currEl
//         arr[nextIndex] = nextEl
//     }
// }
// console.log(arr)


// arr.forEach((el, i) => {
//     let anoEl;
//     let currEl = el;
//     const nextIndex = i + 1
//     let nextEl = arr[nextIndex]
//     if (currEl > nextEl) {
//         anoEl = currEl;
//         currEl = nextEl;
//         nextEl = anoEl;
//         arr[i] = currEl
//         arr[nextIndex] = nextEl
//     }
// });











// // i - 0
// // currEl - 1
// // nextIndex - 1
// // nextEl - arr[1] = 5
// // arr = [1,5,4,3,2]

// // i - 1
// // currEl - 5
// // nextIndex - 2
// // nextEl - arr[2] = 4
// // arr = [1,4,5,3,2]

// // i - 2
// // currEl - 4
// // nextIndex - 3
// // nextEl - arr[3] = 3
// // arr = [1,4,3,5,2]

// // i - 3
// // currEl - 3
// // nextIndex - 4
// // nextEl - arr[4] = 2
// // arr = [1,4,3,2,5]


// // i - 4
// // currEl - 2
// // nextIndex - 5
// // nextEl - arr[5] = undef
const arr = []
