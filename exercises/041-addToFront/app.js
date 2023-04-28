function addToFront(arr, element) {
  for(let i=arr.length -1;i>-1;i--)
  {
arr[i+1]==arr[i];
  }
  return arr;
}

let output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]

//Hint: you can use unshift