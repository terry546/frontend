// fill(value)
// fill(value, start)
// fill(value, start, end)

const arr = new Array(3);
for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(4).fill(1); // 크기가 4이고, 1로 채워진 배열 생성
}
arr[0][0] = 10;
console.log(arr[0][0]); // 10
console.log(arr[1][0]); // 1
console.log(arr[2][0]); // 1

// 출저 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill