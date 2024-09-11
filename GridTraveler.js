/*const gridTravelerOPT = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};
console.log(gridTraveler(1, 1)); //1
console.log(gridTraveler(2, 3)); //3
console.log(gridTraveler(3, 2)); //3
console.log(gridTraveler(3, 3)); //6
console.log(gridTraveler(18, 18)); //2333606220 // Takes too long so our code has problems in terms of time complexity and space
*/
const gridTravelerOPT = (m,n, memo={}) => {
  const key = m + ',' + n;
  if(key in memo) return memo[key];
  //are the args in the memo
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTravelerOPT(m - 1, n, memo) + gridTravelerOPT(m, n - 1, memo);
  return memo[key];
}

console.log(gridTravelerOPT(1, 1)); //1
console.log(gridTravelerOPT(2, 3)); //3
console.log(gridTravelerOPT(3, 2)); //3
console.log(gridTravelerOPT(3, 3)); //6
console.log(gridTravelerOPT(18, 18)); //2333606220
