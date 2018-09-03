var a = 1

var demo = {
  a: 1
}

var test = (arg1, arg2) => {
  console.log('%ca的值：', 'color: green;', this.a)
  console.log('%c接受到的参数：', 'color: red;', arg1, arg2)
}

// call方法
test.call(demo, '参数一', '参数二')

// apply方法
test.apply(demo, ['参数一', '参数二'])

// bind方法
var newTest = test.bind(demo, '参数一', '参数二')
newTest()