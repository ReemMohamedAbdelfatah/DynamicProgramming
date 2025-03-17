function moveZerosToEnd(arr){
  let nonZeroIndex = 0; //Pointer for placing NON ZERO elements
  //Move all non zero elements to the front
  for (let i=0;i<arr.length;i++){
    if(arr[i] !== 0){
      [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]]; //SWAP
      nonZeroIndex++;
    }
  }
return arr;
}
const array =[1, 0, 2, 0, 3, 4, 0, 5];
  console.log(moveZerosToEnd(array));

  function moveZerosToEndEnhanced(arr){
    return arr.filter(num => num !== 0).concat(arr.filter(num => num === 0));
  }

  console.log(moveZerosToEndEnhanced(array));