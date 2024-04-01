//EXERCICIO

function fiss (x){
    if (typeof x !== 'number') return x;
    if (x % 3 === 0 && x % 5 === 0) return 'FizzBuzz';
    if (x % 3 === 0) return 'Fizz';
    if (x % 5 === 0) return 'Buzz';
    return x;
}

console.log('a', fiss('a'))
for( let i = 0; i <= 100; i++) {
    console.log(i, fiss(i))
}