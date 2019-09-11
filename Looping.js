// console.log('Hello')
// console.log('Hello')
// console.log('Hello')
// console.log('Hello')
// console.log('Hello')

// var i = 1;
// while(i <= 500) {
//     console.log('Hello')
//     i++;
// }
// var i = 2;
// for(;;) {
//     console.log('Hello')
//     i++;
//     if(i > 5) {
//         break;
//     }
// }

var bikinInterval = (fn, time) => {
    for(var i = 1;; i++) {
        if(i % (time * 100000) === 0) {
            fn()
        }
    }
}
var bikinTimeout = (fn, time) => {
    for(var i = 1;i <= time * 1000000; i++) {
    }
    fn()
}

var contoh = () => {
    console.log('Hello')
}

bikinInterval(contoh, 3000)
bikinTimeout(contoh,3000)
// setInterval(contoh,2000)