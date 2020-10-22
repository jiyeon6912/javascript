// 1. function
// -함수선언 과 함수호출

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