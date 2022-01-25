function add(num1, num2){
   return num1 + num2;
}
console.assert(add(3, 5) ===8);

//

function multiply(num1,num2){
    let product = 0;
    for(let i=0;i<num2;i++){
        product = add(product,num1)
    }
    return product;
}
console.assert(multiply(4, 6) === 24);

//

function power(a,b){
    let pow = 1;
    for (let i = 1; i <=b ; i++){
        pow = multiply(pow,a)
    }
    return pow;
}
console.assert(power(3, 4) === 81);

//

function factorial(x){
    let fac = 1
    for(let i=1; i<=x; i++){
    fac = multiply(fac, i)
}
    return fac
}
console.assert(factorial(5) === 120);

//

function fibonacci(z){
    let fib = [0, 1];
    for (let i = 2; i <= z - 1; i++) {
        fib[i] = add(fib[i - 1], fib[i - 2]);
    }
    return fib[z - 1];
}

console.assert(fibonacci(7) === 13);
