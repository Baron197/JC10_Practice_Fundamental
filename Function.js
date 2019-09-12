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

var templateArr = [{
    1: '   ',
    2: ' _ ',
    3: ' _ ',
    4: '   ',
    5: ' _ ',
    6: ' _ ',
    7: ' _ ',
    8: ' _ ',
    9: ' _ ',
    0: ' _ '
}, {
    1: '  |',
    2: ' _|',
    3: ' _|',
    4: '|_|',
    5: '|_ ',
    6: '|_ ',
    7: '  |',
    8: '|_|',
    9: '|_|',
    0: '| |'
}, {
    1: '  |',
    2: '|_ ',
    3: ' _|',
    4: '  |',
    5: ' _|',
    6: '|_|',
    7: '  |',
    8: '|_|',
    9: ' _|',
    0: '|_|'
}]

var tampilkanScoreBoard = (angka) => {
    var arr = []

    while(angka > 0) {
        var angkaTerakhir = angka % 10;
        arr.unshift(angkaTerakhir)

        angka = Math.floor(angka / 10)
    } 

    var output = ''
    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < arr.length; j++) {
            output += templateArr[i][arr[j]]
        }
        output += '\n'
    }

    console.log(output)
}

var a = 857

tampilkanScoreBoard(a)

// var output = ' _     _\n|_|  | _|\n|_|  ||_'

// console.log(output)
