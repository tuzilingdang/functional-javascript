
module.exports = function arrayMap(arr, fn, thisArg) {
	console.log(thisArg);
	return arr.reduce(function(acc, curr, index, arr) {
		acc.push(fn(curr));
		return acc;
	}, [])
}


//var nums = [1,2,3,4,5]
//
//// `map` is your exported function
//var output = arrayMap(nums, function double(item) {
//  return item * 2
//})

//console.log(output) // => [2,4,6,8,10]])}))]
