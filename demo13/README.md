
## 阻塞事件循环

###  任务

编辑模板中的递归repeat函数，使它不会阻塞事件循环。这里需要repeat函数是异步的。

一个放入队列的timeout函数在100毫秒后执行回调函数，回调函数打印出这个任务的结果然后退出程序。repeat函数需要解除事件循环的控制，让tiemout在所有的操作完成前执行回调函数。

在timeout执行回调前试着采用尽可能多的方法！

### 限定条件

* 不可以使用for／while循环或者Array#forEach。

* 不要创建不必要的函数。

### 提示

* 如果你的程序跑的时间太久，可能是某些地方写错了。试着用control - C 来杀掉node进程。

### 资源

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Timers

### 模板

```
    function repeat(operation, num) {
      // modify this so it can be interrupted
      if (num <= 0) return
      operation()
      return repeat(operation, --num)
    }
    module.exports = repeat

```

