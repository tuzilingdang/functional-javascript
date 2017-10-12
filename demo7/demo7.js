
//function reduce(arr, fn, initial) {
//	if(arr.length) {
//		return reduce(arr.slice(1), fn, fn(initial, arr[0]));
//	}
//	else return initial;
//}

function reduce(arr, fn, initial){
	return (function reduceOne(index, value){
		if(index > arr.length - 1) return value;
		return reduceOne(index + 1, fn(value, arr[index], index, arr), )
	})(0, initial);
}
module.exports = reduce;

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

function countWords(inputWords) {
	return reduce(inputWords, function (prev, curr, index, arr) {
	return prev[curr] = ++prev[curr] || 1; 
},{})
}

console.log(countWords(inputWords));
