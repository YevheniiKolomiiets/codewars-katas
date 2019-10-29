snail = function(array) {
  let result = [];
  let way = 'right';
  
  while (array.length) {
    switch (way) {
      case 'right': 
        result.push(...array[0]);
        array.splice(0, 1);
        way = 'down';
        break;
      case 'down':
        array.forEach(subArr => {
          result.push(subArr.pop());
        });
        way = 'left';
        break;
      case 'left':
        result.push(...array.pop().reverse());
        way = 'up';
        break;
      case 'up':
        array.reverse().forEach(subArr => {
          result.push(subArr.shift());
        });
        array.reverse();
        way = 'right';
        break;
    }
  }
  
  return result;
}
