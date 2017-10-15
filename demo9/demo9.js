
var slice = Array.prototype.slice;

function logger(namespace) {
	return  function (){
    	var args = [namespace].concat(Array.prototype.slice.call(arguments));
		console.log.apply(console, args);
	};
}

module.exports  = logger;

// TEST
var info = logger('INFO:')
info('this is an info message')
// INFO: this is an info message

var warn = logger('WARN:')
warn('this is a warning message', 'with more info')
// WARN: this is a warning message with more info))))
