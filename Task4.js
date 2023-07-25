function maxAdded(arr, target) {
  for (i = 0; i < arr.length-1; i++) {
    for (j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
}

const res = maxAdded([1, 3, 6, 8, 11, 15], 17);
console.log(res);
