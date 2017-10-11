
function reduce(arr, fn, initial) {
	if(arr.length) {
		return reduce(arr.slice(1), fn, fn(initial, arr[0]));
	}
	else return initial;
}
module.exports = reduce;

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

function countWords(inputWords) {
	return reduce(inputWords, function (prev, curr, index, arr) {
	return prev[curr] = ++prev[curr] || 1; 
},{})
}

console.log(countWords(inputWords));
