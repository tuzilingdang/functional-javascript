
## 不使用Bind的偏函数

## 偏函数是什么

 使用偏函数可以通过修改一些参数，在现有的函数基础上创建新的函数。在设置了需要部分应用的参数后，你可以得到一个新的函数，可以传入剩下的参数并且可能执行原来的函数。

更正式的定义是： 偏函数的应用是改变函数的一些参数，进而生成更少数量参数的函数。

举个栗子， 假设我们有一个函数add， 它有两个参数，我们把它相加，函数长这个样子：

```
function add(x, y) {
	return x + y
} 

add(10, 20) // => 30
```

现在，假设我们有一个函数partiallyApply. 它是一个将函数和一些参数进行部分应用的偏函数。

这里我们将第一个参数x与add函数结合进行‘偏应用’：
```
	var addTen = partiallyApply(add, 10) // 将x变为10
```

addTen是一个取了y参数的新函数，但是它还没有被调用。

一旦我们传入实参给y，我们就可以执行原来的add函数。

```
	addTen(20) // => 30
	addTen(100) // => 110
	addTen(0) // => 10
```

以上所有的例子都无一例外的调用了add(10, y), 这里y被提供给addTen函数的调用。

## 任务

使用偏函数区创建一个函数，它修改传给console.log的第一个参数。换言之，实现一个logging函数，在它的输出前前置一个namespace的参数。

你的函数实现需要传入一个命名空间的字符串并返回一个打印到cosole带有这个前置namespace的信息的函数。

你需要用到Funcion#apply来实现偏函数。

确保所有参数在传到logging函数之后被打印出来。直接将结果打印到控制台即可。

### 参数
* namespace：一个被前置到每条信息之前的字符串，它被传入返回的函数中。

## 调用范例

```
	var info = logger('INFO')
	info('this is an info message')
	// INFO: this is an info message

	var warn = logger('WARN:')
	warn('this is a warning message', 'with more info')
	// WARN: this is a warning message with more info 
```
### 限定条件
1. 不要使用 Function#bind
2. 使用Function#apply

### 范例
```
	var slice = Array.prototype.slice

	function logger(namespace) {
		// 在此填充
	}

	module.exports = logger
```

