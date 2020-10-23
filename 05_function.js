// 1. function
// -함수선언 과 함수호출

// var, function()은 선언하기 전에 먼저 호출하여도 에러나지 않는다. 프로그램 구동시 프로그램 맨 상단에 호출하여 실행하는 과정을 호이스팅이라함
// 단, 함수표현식의 경우 선언전 실행하면 에러가 발생한다. 그러므로 코딩을 순차적으로 실행할 수 있도록 프로그래밍 한다.
  


//함수선언식
function myFunc() {
  console.log('안녕, 자바스크립트~~~~')
}
// 함수 호출
myFunc()


//함수표현식 : 함수는 일급객체이므로 변수에 함수할당이 가능하다.
const sayHello = function() {
  console.log('Hello~~~~')
}

sayHello()

// 2. 매개변수 parameter
function printMessage(message) {
  console.log(message)
}

printMessage('hahaha')
printMessage('파파파')

// 3. 기본 파라미터 (es6)
function showInfo(title, name = '스티브잡스') {
  console.log(`${title} by ${name}`)
}

showInfo('게르니카', '피카소')
showInfo('풍경')


// 4.Rest 파라미터 / Spread 연산자 (es6)
function printAll(...items) {
  // for (let i = 0; i < items.length; i++) {
  //   console.log(items[i])
  // }

  for(const item of items) {
    console.log(item)
  }
}

printAll('봄','여름','가을','겨울','안녕')

// 5. scope 영역을 의미함
let movie = '하하하' //grobal(전연변수)
function paintMovie() {
  let myMovie = '생활의발견' //Local(지역변수)
  console.log(myMovie)
  console.log(movie)
}

paintMovie()
// console.log(myMovie)

//6.Return
function plus(a ,b) {
  return a + b //15 return이 실행되면 함수가 종료되므로 return 이후의 코드는 실행되지 않음.
  console.log('안녕하세요')
}
const result = plus(5,10)
console.log(result)

// 7.Callback function 콜백함수
const call = function(myName, printPicaso, printJobs) {
  if(myName=== 'Picaso') {
printPicaso()
  }else {
    printJobs()
  }
}

const printPicaso = function() {
  console.log('im picaso') 
}

const printJobs = function() {
  console.log('im jobs') 
}

call('Picaso',printPicaso, printJobs)

// 8.Arrow function

// const Add = function(a, b) {
//   // console.log(a + b)
//   return a+b
// }

// const Add(a, b) => {
//   return a + b
// }

const Add = (a, b) =>  a + b //무명함수만 Arrow function으로 바꿀 수 있다.


// Add(5,8)
const sum = Add(5,8)
console.log(sum)

function printHello() {
  console.log('안녕하세요')
console.log(this)
}

const printHello = () => {
  console.log(this)
}

// 매개변수가 하나일때는 const printHello = a => {} 표현한다.
printHello()