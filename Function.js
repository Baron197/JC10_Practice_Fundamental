// var coba = (fnct) => {
//     var hasil = fnct()
//     console.log(hasil)
// }

// var test = () => {
//     return () => {
//         return () => {
//             return 10
//         }
//     };
// }

// var a = test()()()



// arr = [1,2,3,4,5, {
//     hello: () => {
//         return (text) => {
//             return {
//                 kort: [1,2,{
//                     kuri: () => {
//                         return {
//                             kuri: () => {
//                                 console.log('Hello Guys')
//                             }
//                         }
//                     }
//                 }]
//             }
//         }
//     }
// }]
// var a = arr[5].hello()('test')['kort'][2].kuri().kuri()
// console.log(a)
// var b = arr[5].hello()('test')
// var c = arr[5].hello()('test')['kort'][1]

// var a = new Array(5)
// a[2] = 50
// console.log(a)
// console.log(a.length)

// var c = 'Test'
// console.log(c)
// console.log(typeof(c))
// console.log(c.split())
// var angka = [1,2,3,4,5]

// var hasil = angka.map((item) => {
//     return [1,2]
// })
// console.log(hasil)
// var hasil1 = angka.filter((item) => {
//     return 'test'
// })
// console.log(hasil1)

var map = (arr, fn) => {
    var newArr = []

    for(var i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]))
    }

    return newArr;
}

// var filter = (arr, fn) => {
//     var newArr = []

//     for(var i = 0; i < arr.length; i++) {
//         var condition = fn(arr[i])
//         if(condition) {
//             newArr.push(arr[i])
//         }
//     }

//     return newArr;
// }

// var numbers = [1,2,3,4,5]

// var hasil = filter(numbers, (item) => {
//     return item === 2
// })
// console.log(hasil)

// var tampilkanScoreBoard = (angka) => {
//     var arr = []

//     while(angka > 0) {
//         var angkaTerakhir = angka % 10;
//         arr.unshift(angkaTerakhir)

//         angka = Math.floor(angka / 10)
//     } 

//     return arr
// }

// var a = 3157

// console.log(tampilkanScoreBoard(a))

console.log('_\n_|\n_|')
console.log(' _\n|_\n _|')
