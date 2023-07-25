function sumAll(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if(arr[i] >= 0){
        sum = sum + arr[i];
    }
  }
  return sum;
}

const res = sumAll([2, -5, 10, -3, 7]);
console.log(res);
