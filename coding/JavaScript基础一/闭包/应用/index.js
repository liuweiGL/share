function Persion(){
  var age = 0
  this.happyNewYear = function(){
    age ++
  }
  this.getAge = function(){
    return age
  }
}

var xiaoming = new Persion()

xiaoming.happyNewYear()

console.log('xiaoming的年龄为：', xiaoming.getAge())