var a = 1

var demo = {
  a: 2,
  test: function() {
    console.log('%ca的值：', 'color: green;', this.a)
  }
}

var test = demo.test

 test() // 输出是？
