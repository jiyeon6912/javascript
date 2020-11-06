const form = document.querySelector('form')
const input = form.querySelector('input')  //input value 값은 form을 통해서 받아온 데이타이다.
const food_list = document.querySelector('.food_list')

const APP_ID = '9a79b798'
const APP_KEY = '71183b857c14f64142c0a1ab4fe9e4ac'

// https://api.edamam.com/search
// https://api.edamam.com/search?q=chicken&app_id=${71183b857c14f64142c0a1ab4fe9e4ac}&app_key=${71183b857c14f64142c0a1ab4fe9e4ac}&from=0&to=3



 async function getRecipe(query) {
console.log(query)
const baseURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=20`

const response = await fetch(baseURL) //url주소에서 데이타를 가져오는 함수
const data = await response.json()
console.log(data.hits)

}

function init() {
console.log('Recipe Start!!')
form.addEventListener('submit', e => {
  e.preventDefault()  //브라우즈의 기본이벤트로 인해 출력이 안되는것을 방지함
  const query = input.value 
  if(query === '') return
  // console.log(input.value)
  getRecipe(query)
  input.value = ''



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