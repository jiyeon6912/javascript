const form = document.querySelector('form')
const input = form.querySelector('input')  //input value 값은 form을 통해서 받아온 데이타이다.
const food_list = document.querySelector('.food_list')

function init() {
console.log('Recipe Start!!')
form.addEventListener('submit', e => {
  e.preventDefault()  //브라우즈의 기본이벤트로 인해 출력이 안되는것을 방지함
  console.log('hahaha')

}) 
}

// function init() {
//   console.log('Recipe Start!!')
//   form.addEventListener('submit',function(e){
//     e.preventDefault()
//     console.log('표준함수형식')
//   })
  
//   }) 
//   }

init()