var a = 1

// 直接调用
function test() {
  console.log('%ca的值：', 'color: green;', this.a)
  console.log('%cthis指向window：', 'color: red;', this === window)
}

// 作为对象函数调用
var demo = {
  a: 2,
  test: function() {
    console.log('%ca的值：', 'color: green;', this.a)
    console.log('%cthis指向demo：', 'color: red;', this === demo)
  }
}

test()
demo.test()
