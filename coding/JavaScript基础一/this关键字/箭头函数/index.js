var a = 1
var parent = this

var demo = {
  a: 2,
  test: () => {
    var self = this
    console.log('%ca的值：', 'color: green;', this.a)
    console.log(
      '%c箭头函数的this指向父级作用域的this：',
      'color: red;',
      this === parent
    )
    return () => {
      console.log('%ca的值：', 'color: green;', this.a)
      console.log(
        '%c箭头函数的this指向父级作用域的this：',
        'color: red;',
        this === self
      )
    }
  }
}

var fn = demo.test()
fn()
