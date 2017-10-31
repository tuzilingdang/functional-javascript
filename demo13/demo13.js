
function repeat(operation, num) {
	// modify this so it can be interrupted
	if (num <= 0) return
	operation()
	return repeat(operation, --num)
}

module.exports = repeat

setTimeout(function(){
	console.log('Time is out')
}, 100);
