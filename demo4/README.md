 
#  Filter函数


## 任务

使用 Array#filter 实现一个名为getShortMessages的函数。

getShortMessages的入参是一个包含一系列对象的数组，对象有'.message' 属性，函数需要返回一个包含所有message < 50 个字的对象的数组。 


## 参数

  * messages: 包含了10～100个对象的数组，对象类似:

    {
      message: 'Esse id amet quis eu esse aute officia ipsum.' // random
    }

## 要求

  * 不使用任何 for/while 循环或 Array#forEach 函数.


## 例子

    [ 'Tempor quis esse consequat sunt ea eiusmod.',
      'Id culpa ad proident ad nulla laborum incididunt.',
      'Ullamco in ea et ad anim anim ullamco est.',
      'Est ut irure irure nisi.' ]

## 资料

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## 待实现的函数
 
    function getShortMessages(messages) {
      // SOLUTION GOES HERE
    }

    module.exports = getShortMessages