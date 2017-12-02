
function even(n) {
	console.trace()
	if (n===0) 
		return true
	else
		return odd(Math.abs(n)-1)
}

function odd(n) {
	console.trace()
	if(n===0) 
		return false
	else
		return even(Math.abs(n)-1)
}

//console.trace(even(100000))
console.log(odd(3))

