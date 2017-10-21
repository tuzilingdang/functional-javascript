
function Spy(target, method) {
	var originalMethod = target[method];
	var result = {
		count: 0
	};
	
	target[method] = function(){
		result.count++;
		return originalMethod.apply(this, arguments);
	};

	return result;
}

module.exports = Spy

var spy = Spy(console, 'error')

console.error('calling console.error')
console.error('calling console.error')
console.error('calling console.error')

console.log(spy.count) // 3
