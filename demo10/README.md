# 使用Bind的偏函数


## 任务

用 Function#bind 来实现一个logging function，使它可以命名一些信息。

你的实现函数需要传入一个namespace字符串, 然后返回一个函数，这个函数可以打印出namespace前置在传入的信息之前的一串信息到控制台。

确保所有参数在传到logging函数之后被打印出来。

直接将结果打印到控制台即可。

## 参数

* namespace：一个被前置到每条信息之前的字符串，它被传入返回的函数中。

## 调用范例


    var info = logger('INFO:')
    info('this is an info message')
    // INFO: this is an info message

    var warn = logger('WARN:')
    warn('this is a warning message', 'with more info')
    // WARN: this is a warning message with more info  

 

## 限定条件

  * 使用 Function#bind

## 范例


    module.exports = function(namespace) {
      // SOLUTION GOES HERE
    }