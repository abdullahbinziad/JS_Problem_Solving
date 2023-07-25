// const str = "sakibul";
let reversedStr = [];

function myReverse(str) {
  const strArr = str.split("");
  for (i = str.length; i >= 0; i--) {
    reversedStr.push(strArr[i]);
  }
}

myReverse("sakibul");
const res = reversedStr.join("");
console.log(res);
