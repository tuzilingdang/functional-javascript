
 Async循环

下面的代码是一段加载用户信息的函数，这里有严重的问题，看到问题在哪里了么？

    function loadUsers(userIds, load, done) {
      var users = []
      for (var i = 0; i < userIds.length; i++) {
        users.push(load(userIds[i]))
      }
      return users
    }

    module.exports = loadUsers

# 任务
修改代码，使回调函数在所有的用户信息都加载完之后再执行。用户信息的顺序必须和提供的用户id顺序一致。函数是异步的，这里可以不用不用关心返回值。


## 参数

  * userIds: 用户ids， 一串数字
  * load: 包含对应用户id的信息的回调函数
  * done:  一个包含用户对象的数组

## 要求

  * 不要使用for/while循环 (可以使用Array#forEach)
  * `done` 的顺序必须和传入的`userIds`一致
  * 用户信息需要并行被加载，整个过程不能超过1s
  * 不要生成任何不必要的函数


## 需要改造的函数

    function loadUsers(userIds, load, done) {
      var users = []
      for (var i = 0; i < userIds.length; i++) {
        users.push(load(userIds[i]))
      }
      return users
    }

    module.exports = loadUsers
