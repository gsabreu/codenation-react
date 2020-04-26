'use strict'

const fibonacci = () => {
    let n = 1
    let b = 0
    let fib = [0]
    let aux = 0
    while (n < 350){
        aux = n
        n = b + n
        b = aux
        fib.push(n)
    }
    return fib;
}

const isFibonnaci = (num) => {
    let fib = fibonacci()
    return fib.includes(num)
}

module.exports = {
    fibonacci,
    isFibonnaci
}
