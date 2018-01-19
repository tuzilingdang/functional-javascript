 # Map函数

## 任务

把下述 for-loop 循环改成使用 Array#map函数:

    function doubleAll(numbers) {
      var result = []
      for (var i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2)
      }
      return result
    }

    module.exports = doubleAll

## 参数

  * numbers: An Array of 0 to 20 Integers between 0 and 9 一个包含0～20个整数的数组，每个数的大小在0～9之间

## 要求

  * 使用 Array.prototype.map()
  * 不能使用 for/while 循环或 Array.prototype.forEach.

## 参考资料

  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## 待实现的函数

    function doubleAll(numbers) {
      // SOLUTION GOES HERE
    }

    module.exports = doubleAll