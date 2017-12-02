
function repeat(operation, num) {
	//console.trace();
	if(num <= 0) return 
	operation()
	return repeat(operation, --num)
}

function trampoline(fn) {
	while(fn && typeof(fn) === 'function'){
		fn()
	}	
}

var count = 3;
trampoline(repeat(function(){	
	console.log(count--);
},3))

module.exports = function (operation, num) {
	return trampoline(function() {
		return repeat(operation, num)
	})
}
