
 ## Trampoline
下面一段代码包含了repeat的定义。repeat的入参有一个function，一个Number类型num，然后调用函数操作num次。

```
	var count = 0
	repeat(function() {
		count++
	}, 100)

	console.log('executed %d times.', count);
```

但是执行repeat非常非常多次后会造成堆栈溢出：

```
	var count = 0
	repeat(function() {
		count++
	}, 100)

	console.log('executed %d times.', count);
    // => RangeError: Maximum call stack size exceeded
```
## 任务
编辑下面的代码，使它可以使用trampoline函数去持续同步的调用它自己。

假定传入repeat函数的函数体没有任何入参，并且这里不关心返回值。

## 限制条件

* 不要使用任何循环改变repaet的实现。

## 提示

* 编辑‘repeat‘，之后它返回下一步。

* 一个trampoline函数持续同步执行这些步骤，不断地进行下一步知道不能运行。这里可以使用一个循环。

* 如果你的程序跑的时间过长，使用Control - C杀掉进程。
