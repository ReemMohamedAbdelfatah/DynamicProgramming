const array = [12, 35, 1, 10, 34, 35, 1];
const SecondLargest = (arr) => {
  const n = arr.length;
  if (n < 2) return -1;
  let max = -Infinity,
    prev = -Infinity;
  for (let i = 0; i <= n - 1; i++) {
    if (arr[i] > max) {
      prev = max;
      max = arr[i];
    }

    else if(arr[i] > prev && arr[i] !== max)
    {
      prev = arr[i];
    }
  }

  if(prev === -Infinity) return -1;
  else return prev;
};

const secondLargestEnhanced = (arr) => {
  const max = Math.max(...arr); // Find the maximum value
  const filteredArr = arr.filter(num => num !== max); // Remove all occurrences of max

  return filteredArr.length > 0 ? Math.max(...filteredArr) : -1; // Find the second max if exists
}

console.log(SecondLargest(array));
console.log(secondLargestEnhanced(array));
