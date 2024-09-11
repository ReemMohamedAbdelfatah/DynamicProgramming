/*

const fib = (n)=> {
  if(n<=2)
    return 1;
  return fib(n-1) + fib(n-2);
}

console.log(fib(6))
console.log(fib(4))
console.log(fib(50)) //took too long so our solution needs improvments in terms of time complexity and space

*/

//Let's try better approach using memoization technique to avoid unneccessary repetitive operations

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(6));
console.log(fib(4));
console.log(fib(50));
