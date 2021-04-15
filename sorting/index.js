//Implement bubbleSort

function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < (arr.length - i - 1); j++){
      if(arr[j] > arr[j+1]) {
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

//Implement selectionSort

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if(indexOfMin !== i) {
      let temp = arr[indexOfMin];
      let arr[indexOfMin] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
}