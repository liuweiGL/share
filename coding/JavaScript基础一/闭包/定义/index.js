
// 相对于 `test` 函数来讲，这就是一个 `自由变量`
var a = 1

/**
 * 技术的角度理解闭包：
 * `test` 引用了一个变量 `a`，而且 `a` 既不属于 `test` 参数也不是局部变量
 * `test` 就是一个闭包
 */
function test() {
  console.log(a)
}

/**
 * 实践的角度理解闭包
 * `demo` 返回一个匿名函数，而匿名函数引用了一个自由变量 `a`
 * `匿名函数` 就是一个闭包
 */
function demo(){
  var a = 1
  return function(){
    console.log(a)
  }
}
var fn = demo()