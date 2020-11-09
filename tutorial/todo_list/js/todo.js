const form = document.querySelector('form')
const input = form.querySelector('input')
const ul = document.querySelector('.todo_list')

let todos = []

// localStorage.setItem('문자열 키','문자열 값')
// localStorage.getItem('문자열 키')

// console.log (form)
// console.log (input)
// console.log (ul)

function saveTodo() {
localStorage.setItem('todos', JSON.stringify(todos))

}

function removeTodo(e) {
  // console.log(e) 기본이벤트를 출력하여 원하는 항목을 찾아낸다.
  // console.log(e.target.parentNode)  
  
  const li = e.target.parentNode
  li.remove()

  const newTodos = todos.filter(todo => todo.id !== parseInt(li.id))
    // console.log(newTodos)
    // console.log(todo.id)
    // console.log(li.id)
    todos = newTodos
    saveTodo()
  }
  


function paintTodo(text) {  
// console.log(text)
const li = document.createElement('li')
const span = document.createElement('span')

span.addEventListener('click',removeTodo)
li.innerText = text
li.id = todos.length + 1
span.innerText = 'X'
li.appendChild(span)
ul.appendChild(li)

todos.push({
  id:todos.length +1 ,
  text: text
}) //배열 todos에 text(입력받은값)를 넣는 코드 , id값을 함께 넣어야 하므로 object형식으로 넣어야함.
// console.log(todos)

saveTodo() 

// console.log(li)
}

function handleSubmit(e) {
 e.preventDefault()
  // console.log('Handel Submit!!!')
  // console.log(input.value)
  if (input.value === '') return  // return 이후의 함수를 실행시키지 않고 중지됨
  paintTodo(input.value)
  input.value = ''
}

function loadTodo() {
  // console.log('Loading Todos...')
  // console.log(localStorage.getItem('todos'))

  const loadTodo = localStorage.getItem('todos')

  if(loadTodo !== null) {
    const parseTodo = JSON.parse(loadTodo)  //배열저장을 위한 문자열형태JSON로 변형하는 코드
  // console.log(parseTodo)
  parseTodo.forEach(todo => paintTodo(todo.text))
  
  }
}

// const loadTodo = function() {
//   console.log('Loading Todos...')
// }

function init() {
 loadTodo()
 form.addEventListener('submit',handleSubmit)
}


init()