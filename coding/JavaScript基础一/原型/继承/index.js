function Persion() {}
Persion.prototype.say = function() {
  console.log('this is: ', this.name)
}

function Man(name) {
  this.name = name
}

// 让 `Man.prototype` 继承 `Persion.prototype`
Man.prototype = new Persion()
// 防止`constructor` 属性丢失
Man.prototype.constructor = Man

var xiaoming = new Man('xiaoming')
xiaoming.say()
