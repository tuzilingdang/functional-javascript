 Basic: Every Some
 Exercise 5 of 18


# Task

实现以下四个命名为one、two、add和minus的函数

调用这四个函数，分别有以下输出结果：
one(add(two()));  // => 3
one(add(one()));  // => 2
two(add(one()));  // => 3
two(minus(one()));  // => 1

## Arguments

  * goodUsers: a list of valid users

Use array#some and Array#every to check every user passed to your returned function exists in the array passed to the exported function.

## Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

## Resources

  * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every
  * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some

## Boilerplate

    function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
      };
    }

    module.exports = checkUsersValid
