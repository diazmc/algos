//Implement bubbleSort

function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < (arr.length - i - 1); j++){
      let temp = arr[j+1];
      arr[j+1] = arr[j];
      arr[j] = temp;
    }
  }

  return arr;
}