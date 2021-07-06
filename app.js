function fibonacci(x) {
    let fib = [1,2];
    if (x <= fib.length) {
        return fib[x-1];
    }
    let i = 2;
    while (x > fib.length) {
        fib.push(fib[i-2]+fib[i-1])
        i++;
    }
    return fib[x-1]
    
}

y = Number(prompt("Enter the number :"))
console.log(fibonacci(y));

