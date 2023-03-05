function fibonationator(){
let previous = 0;
let current = 1;

function nextNum(){
    let fibNum = previous+current;
    current=previous;
    previous=fibNum;
    return fibNum;
}
return nextNum
}
let fib = fibonationator()
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());