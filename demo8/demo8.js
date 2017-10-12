
function duckCount () {
	var args = Array.prototype.slice.call(arguments);

	return args.filter( (obj) => {
		return Object.prototype.hasOwnProperty.call(obj, 'quack');
	}).length;
}

module.exports = duckCount;

var notDuck = Object.create({quack: true});
var duck = {quack: true};
console.log(duckCount(duck, notDuck));
console.log(Object.prototype.hasOwnProperty.call(notDuck, 'quack'));
