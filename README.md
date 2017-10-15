
## 函数式编程

###Start

项目中共有18个小练习，其中17个来自NodeSchool的functional-javascript教程，项目中做了翻译，第18个是增加的另外一个有趣的小练习。
直接刷英文版练习可以直接去以下链接安装：

[NodeSchool](https://nodeschool.io/)

[functional-javascript](https://github.com/timoxley/functional-javascript-workshop)

以下为函数式编程的相关知识，练习前可以先了解一下相关知识点。

### 为什么使用函数式编程
我们通常会更了解面向对象编程。在面向对象编程中，一般会将问题分解为不同的对象，这些对象组合在一起，变为更大的部件。每个对象包括自己的属性和方法。

**面向对象的问题**:对象之间的交互会引起各个对象内部状态发生改变，而整个系统的状态转变依赖于各个对象的细微状态变化共同作用的结果。问题就在于了解这些细微的变化会容易感到困惑。

而函数式编程，是以函数为**抽象单元**和**行为单位**，将一个问题分解成几个函数式的部分。这些函数也可以组合起来，构建更大的函数。这样可以减少可见的状态修改，可以在原始数据不发生变化的情况下实现新的函数。

### 相关知识点

在开始函数式编程之前，有必要先掌握的知识点：

Javascript中的函数／变量作用域／闭包等基础知识。

了解一下JavaScript中filter、map、reduce、some、every等函数的基本用法。