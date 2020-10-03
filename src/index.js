exports.min = function min (array) {
  if (array !== undefined && array !== null && array.length > 0){
    array.sort((a,b)=> a-b);
    let minValue = array[0];
    return minValue;
  }
  else
  {
    return 0; 
  }
}

exports.max = function max(array) {
  if (array !== undefined && array !== null && array.length > 0) {
  array.sort((a, b) => a - b);
  let maxim = array[array.length-1];
  return maxim;
  }
  else {
  return 0;
  }
}

exports.avg = function avg(array) {
  if (array !== undefined && array !== null && array.length > 0) {
  let sum = 0;
  let srednee = 0;
for (let i = 0; i < array.length; i++)
 {
  sum = sum + array[i];
  srednee = sum / array.length;
}
  return srednee;
}
  else {
  return 0;
}
}
