
## 使用Rduce实现map函数

### 任务

使用 Array#reduce 实现一个简单版的Array#map。

### 输出

map函数可以用来将一个函数作用与数组的每一个元素，然后结果作为一个新的数组被返回。

```
	var nums = [1, 2, 3, 4, 5];

	// `map` 是你要输出的函数
	var output = map(nums, function double(item) {
		return item*2
	});

	console.log(output); // => [2, 4, 6, 8, 10]
```

### 参数

**输入**：一个任意类型的随机数组
**操作**：在input中传入的可以作用与数组元素的任意函数

### 提示

不需要用到`Array.prototype.map`的`thisArg`，也就是函数自带的argument参数

### 模版

```
    module.exports = function arrayMap(arr, fn) {
      // SOLUTION GOES HERE
    }})
```

