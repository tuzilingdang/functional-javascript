function doubleAll(numbers) {
  var result = numbers.map(function(value){
  		return value*2;
  });
  return result;
}

module.exports = doubleAll;