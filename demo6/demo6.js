
var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

function countWords(inputWords) {
	return  inputWords.reduce((countMap, item) => {
		countMap[item] = ++countMap[item] || 1;
		return countMap;
	}, {});
}

module.exports = countWords;
