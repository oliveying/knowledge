function distinct(a, b) {
  let arr = a.concat(b);
  return arr.filter((item, index)=> {
    console.log(item, index, arr.indexOf(item));
    return arr.indexOf(item) === index
  })
}

console.log('dddd', distinct([1,2,3,'1'], [1,3,4]))

var arrTest = [1,2,3,'1', 1,3,4];