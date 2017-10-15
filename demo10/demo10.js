
var logger = function(namespace) {
  // SOLUTION GOES HERE
	return console.log.bind(console, namespace)
}

module.exports = logger;

// TEST
var info = logger('INFO:');
info('this is an info message');
