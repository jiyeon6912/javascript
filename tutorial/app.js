const price = document.querySelector('.price')
const count = document.querySelector('.count')
const sum = document.querySelector('.sum')

// const plus = document.querySelector('.plus')
// const minus = document.querySelector('.minus')
// const reset = document.querySelector('.reset')

const btns = document.querySelectorAll('button') 

console.log(price) //변수지정 확인하는 작업 필요!!
console.log(count)
console.log(sum)
// console.log(btns)

const unit_price = 15000 // 물건 단가
let num = 1 //초기수량

price.textContent = unit_price
count.textContent = num
sum.textContent = unit_price * num

function printTotalPrice() {
  count.textContent = num
  sum.textContent = unit_price * num
}


// btns.forEach(function(btn) {

// } 표준형식

 
 btns.forEach(btn=>  {
  //  console.log(btn)
  btn.addEventListener('click',function(e){
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