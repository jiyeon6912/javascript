const price = document.querySelector('.price')
const count = document.querySelector('.count')
const sum = document.querySelector('.sum')
const btns = document.querySelectorAll('button')

console.log(price) //변수지정 확인하는 작업 필요!!
console.log(count)
console.log(sum)
console.log(btns)

const unit_price = 15000 // 물건 단가
const num = 1 //초기수량

price.textContent = unit_price
count.textContent = num
sum.textContent = unit_price * num