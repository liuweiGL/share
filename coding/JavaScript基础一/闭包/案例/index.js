// 代码一
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0)
}

// 代码二
for (var i = 0; i < 10; i++) {
  (function(i) {
    console.log(i)
  })(i)
}
