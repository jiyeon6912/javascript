console.log('hahaha')

// variable 변수
// var, let, const
// scope 블럭 : 변수사 유효한 범위를 의미한다.
 
// 1.var
// var의 특징은 scope(블럭) 범위를 무시한다. 읽기, 쓰기 가능하다
{
  var name = 'john'
console.log(name)
}
console.log(name)

// 2.let
{let title ='html'
console.log(title)
title ='css'
console.log(title)
 title ='javascript'
console.log(title)
}
// console.log(title) scope 범위를 벗어났으므로 에러

// 3. const
// 읽기만 가능하고 변하지 않는 값 상수이다.

{
  const subject = 'html'
  console.log(subject)
  // subject = 'css' 상수값은 변경할 수 없으므로 에러
  // console.log(subject)
}

// 4. 변수의 데이터 타입
// number, string, boolean, null, undefined 원시데이터 :값이 하나만 있는 데이터(single data)
// object 원시데이터 primitive(싱글데이터)를 묶어놓은 data
// function first class object 일급객체
// 일급객체특징: 변수에 담을 수 있다
//              함수나 매서드의 인자로 넘길 수 있다.
//              함수나 매서드에서 리턴 할 수 있다.

// number
const num = 10
const width = 20.5
console.log(`값은 ${num}이고, 타입은 ${typeof num}입니다.`)

const a = 1/0
console.log(a)

const b = -25/0
console.log(b)

const c = 'html' /10
console.log(c)

// string
const firstname = 'john'
const lastname = 'snow'
const fullname = firstname + lastname
console.log(fullname)
console.log(`${firstname} ${lastname}`)

// null
const fall = null
console.log(`${fall}이고 타입은${typeof fall} 입니다.`)

// undefined
let winter
console.log(`${winter}이고 타입은${typeof winter} 입니다.`)

// 동적타입: 자바스크립트는 runtime(브라우저에서 실행될때) 상태에서 타입이 정해진다. 자바스트립트의 가장 큰 특징이다.
// 이러한 동적타입 ==> typescript

let word = 'winter'
console.log(`값은 ${word}이고, 타입은${typeof word} 입니다.`)

word = 100
console.log(`값은 ${word}이고, 타입은${typeof word} 입니다.`)

word = '100' + 10
console.log(`값은 ${word}이고, 타입은${typeof word} 입니다.`)

word = '100'/'10'
console.log(`값은 ${word}이고, 타입은${typeof word} 입니다.`)