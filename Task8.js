function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return "Array must have at least two elements";
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondSmallest === Infinity) {
    return "No second smallest element found";
  }

  return secondSmallest;
}

const res = findSecondSmallest([1, 3, 6, 8, 11, 15]);
console.log(res);
