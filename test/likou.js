var arr = [2, 7, 11, 15];
var target = 9;

var targetArr = [];
for (var i = 0; i < arr.length; i++) {
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === 9) {
      targetArr.push(i, j);
    } 
  }
}
console.log(targetArr)