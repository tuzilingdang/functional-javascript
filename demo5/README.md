 Every Some 函数

# 任务
返回一个这样的函数：入参是一个用户数组checkUsers，如果所有的数组内的用户都在原始数组goodUsers存在，那么返回一个return为true的函数。

## 例子

    var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]

    // `checkUsersValid` is the function you'll define
    var testAllValid = checkUsersValid(goodUsers)

    testAllValid([
      { id: 2 },
      { id: 1 }
    ])
    // => true

    testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])
    // => false

## 参数

  * goodUsers: 一个用户数组

方法一：使用数组函数Array#some 和 Array#every 来检查传入函数的每个用户是否在传入的原始数组中存在。
方法二：使用filter函数来实现

## 要求

  * 不使用任何 for/while 循环或 Array#forEach 函数.
  * 不要产生多余的无用函数

## 资料

  * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

## 待实现的函数

    function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
      };
    }

    module.exports = checkUsersValid
