 ## Call函数

JavaScript实现了 'duck'类型（鸭子类型）。 在一个对象中，由它的方法和属性决定有效的语义，而不是由它继承的类或特定接口，鸭子类型是这个对象中的一种动态类型。James Whitcomb Riley把这个概念的名称叫鸭子测试：
“当我看到一只鸟走路像鸭子，游泳像鸭子，叫起来像鸭子，我就叫这只鸟为鸭子。”

在JavaScript里，为了写出健壮的程序，我们有时需要检查一个对象是不是我们需要的类型，我们可以使用Object#hasOwnProperty来检查一个对象的属性是不是它自己定义的（还有一种情况来自于对象继承的原型）：

```
    var duck = {
        quack: function() {
          console.log('quack')
        }
    }

    duck.hasOwnProperty('quack')  // => true
```

我们不能在duck中定义一个hasOwnProperty 方法, 那它来自哪里呢？

Ducky由{} 语法创建出来，由此它继承自Object.prototype：

```
    var object = {quack: true}

    Object.getPrototypeOf(object) === Object.prototype // => true
    object.hasOwnProperty('quack')                     // => true
```

但如果一个对象不是继承自Object.prototype呢？

```
    // create an object with 'null' prototype.
    var object = Object.create(null)
    object.quack = function() {
      console.log('quack')
    }

    Object.getPrototypeOf(object) === Object.prototype // => false
    Object.getPrototypeOf(object) === null             // => true

        object.hasOwnProperty('quack')
    // => TypeError: Object object has no method 'hasOwnProperty'
```

如果可以在this值作用于看起来像对象的什么上调用hasOwnProperty，我们依然可以通过Object.prototype使用它。Function#call 让我们可以在不同的this值上调用任何函数。

    // 第一个调用的参数变为 `this`值
    // 属性名称作为剩余的参数传递给函数

    Object.prototype.hasOwnProperty.call(object, 'quack') // => true

### 任务:

写一个duckCount函数，返回定义了属性‘quack’的参数的个数。 不要把原型中继承的值计算进来。

例子:

```
    var notDuck = Object.create({quack: true})
    var duck = {quack: true}
    duckCount(duck, notDuck) // 1

```

### 参数

  * 你需要传0～20个参数，每个参数可以为有任何属性的任何类型。其中一些参数拥有 'quack' 属性。

### 要求

  * 不要使用任何 for/while 循环或者 Array#forEach.
  * 不要创建任何counter/accumulator 变量.
  * 不要创建任何不必要的函数.

###  提示

  * 在每个函数里可变的／可用的‘变量’是一个看起来像*Array*的*对象*
```
    {
      0: 'argument0',
      1: 'argument1', // etc
      length: 2
    }
```

### 参考

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice#Array-like
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments

### 需要实现的函数

```
    function duckCount() {
      // SOLUTION GOES HERE
    }

    module.exports = duckCount
```