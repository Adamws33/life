function factorial(n) {
  if (n === 0) {
    return 1;
  }
  
  // This is it! Recursion!!
  let f =  factorial(n - 1);
  return n * f;
}

function fibonacci(n)  {
    if(n == 0)
        return 0;
    else if(n == 1)
      return 1;
   else
      return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci2(prior, current, max)  {
	console.log(prior, current);
    if(current >= max) {
        return prior;
    }   
    let fib = fibonacci2(current, prior + current, max);
    return fib;
}

console.log('Factorial 1:', factorial(1));
console.log('Factorial 3:', factorial(3));
console.log('Factorial 7:', factorial(7));

console.log('Fib 1:', fibonacci(6));

console.log('Fib 2:', fibonacci2(0, 1, 100));