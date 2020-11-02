const content = document.querySelector('.content')
const modal = document.querySelector('.modal')
const btns = document.querySelectorAll('.btn')

// console.log(btns)

btns.forEach(btn => {
  // console.log(btn)
  btn.addEventListener('click',() => {
    content.classList.toggle('active') //toggle 이란 active 가 있으면 없애고(remove) 없으면 추가(add)하는 역할
    modal.classList.toggle('active')
  })
  
})

// btns.forEach(function(item) {
//   console.log(item)
// })

