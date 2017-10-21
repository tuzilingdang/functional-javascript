
### Spies函数

### 任务

重写对象的特定方法，使之在保持原有特性上加入新的函数特性。

创建一个Spy函数跟踪一个函数有多少次被调用。

### 例子

```
    var spy = Spy(console, 'error')

    console.error('calling console.error')
    console.error('calling console.error')
    console.error('calling console.error')

    console.log(spy.count) // 3
```

### 参数

**target**：一个包含方法`method`的对象

**method**：一个为`target`需要被监听的方法名称的字符串

### 限制条件

1. 不要使用任何 for／while 循环 或 Array#forEach

2. 不要创建不必要的函数

### 提示

函数具有上下文，入参和出参。确保你考虑了需要监听的函数的执行上下文，入参和出参。

## 模版

```
    function Spy(target, method) {
      // SOLUTION GOES HERE
    }

    module.exports = Spy
```


