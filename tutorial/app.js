const price = document.querySelector('.price')
const count = document.querySelector('.count')
const sum = document.querySelector('.sum')

// const plus = document.querySelector('.plus')
// const minus = document.querySelector('.minus')
// const reset = document.querySelector('.reset')

const btns = document.querySelectorAll('button') //배열형식으로 지정됨

console.log(price) //변수지정 확인하는 작업 필요!!
console.log(count)
console.log(sum)
console.log(btns)

const unit_price = 15000 // 물건 단가
let num = 1 //초기수량(수량초기화) , 수량을 나타내는 num변수는 값이 변경되므로 const로 선언할 수 없음.

price.textContent = unit_price  //price클래스에 unit_price 내용을 출력한다. textContent 매서드의 역할
count.textContent = num
sum.textContent = unit_price * num

function printTotalPrice() {
  count.textContent = num
  sum.textContent = unit_price * num
}


// btns.forEach(function(btn) {

// } 표준형식

 
 btns.forEach(btn=>  {  //btns 배열의 각각의 값을 btn(임의로 지정하는 변수)에 넣어준다.
  //  console.log(btn)
  btn.addEventListener('click',function(e){  //btn에 'click'이벤트가 실행되었을때 function(e)를 실행
    // console.log(e.target.className)
    if(e.target.className === 'plus') {
      num++
      printTotalPrice()
    } else if(e.target.className === 'minus') {
      num--
      if(num <= 1) num =1
      printTotalPrice()
    } else {
      num =1
      printTotalPrice()
    }
  })
 })

// plus.addEventListener('click',function() {
//   // 해야할 작업을 코딩
//   num++
//   // console.log(num)
//   printTotalPrice()
// })

// minus.addEventListener('click',function() {
//   // 해야할 작업을 코딩
//   num--
//   if(num <= 1) num =1   //조건이 하나만 있늘때는 {} 생략가능함 if(num <= 1) { num =1 } 
//   // console.log(num)
//   printTotalPrice()
 
// })

// reset.addEventListener('click',function() {
//   // 해야할 작업을 코딩
//   num = 1
//   // console.log(num)
//   printTotalPrice()
  
// })