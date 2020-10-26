//객체지향프로그래밍

// class
// 탬플릿
// 한번만 선언
// class에는 데이터가 없다
// 예를 들어 class 는 붕어빵틀이고 안에 들어가는 팥, 크림등 속재료에 의해 나온 다양한 팥붕어빵, 크림붕어빵은 object이다.

// object
// class의 인스턴스
// 복수 생성 가능
// 실제 데이터가 존재

// 1. 클래스 선언 : 대문자로 시작한다. / constructor: 생성자 / this는  Car/  name, color는 매개변수
class Car {
  constructor(name,color) { //생성자
 this.name = name  //필드
 this.color = color //필드
  } 

start() {
  console.log(`${this.name} is start !!!`); //매서드:methods
}
 
stop() {
  console.log(`${this.name} is stop ~~~`); //매서드:methods
  }
}

const myCar = new Car('sonata', 'white')  //Car클래스의 내용을 myCar가 상속받음:기본상속
console.log(myCar)
console.log(myCar.name)
console.log(myCar.color)
myCar.start()
myCar.stop()

const oldCar = new Car('pony','red')
console.log(oldCar.name)
console.log(oldCar.color)
oldCar.start()
oldCar.stop()

// 2.Getter and Setter
class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

  get age() {
    return this._age
  }
   set age(value) {
     this._age = value < 0 ? 0 : value
   }
}

const boy = new Person('John', -2)
console.log(boy.name)
console.log(boy.age)


// 3.상속과 다양성
// extends 

class Phone {
  constructor(name,screen,color) {
    this.name = name
    this.screen = screen
    this.color = color
  }

  on() {
    console.log(`${this.name} is turn on!!!!`)
  }

  off() {
    console.log(`${this.name} is turn off~~~~`)
  }
}

class Samsung extends Phone {} //Phone 클래스의 모든 내용을 Samsung클래스로 상속한다.
const galaxy = new Samsung('Galaxy 10','led','white')
galaxy.on()
galaxy.off()

class Apple extends Phone {
  on() {
    super.on() //기존 클래스 내용을 추적하여 적용시키는 명령code
    console.log(`아이폰이 켜졌습니다.`);
  }

  off() {
    console.log(`아이폰이 꺼졌습니다..`); //클래스 내용 별도로 지정하여 적용가능. 다양성

  }
  
}

const iphone = new Apple('iphone X','lcd','gray')
iphone.on()
iphone.off()
