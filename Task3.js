function freeQuent(arr) {
  const freqDict = {};

  for (const num of arr) {
    freqDict[num] = (freqDict[num] || 0) + 1;
  }

  let mostFreqNum;
  let highFreqNum = 0;

  for (const num in freqDict) {
    if (freqDict[num] > highFreqNum) {
      mostFreqNum = num;
      highFreqNum = freqDict[num];
    }
  }

  return mostFreqNum;
}

const array = [1, 2, 3, 2, 2, 4, 4, 4, 4, 5];
const result = freeQuent(array);
console.log(result);
