const btn = document.querySelector('.btn')
const  dimm = document.querySelector('.dimm')
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')

btn.addEventListener('click',function() {

  console.log(this) // 여기서 this 의 의미느 내가 누른 button 을 의미한다. 
  //this를 찾아야할때는 일반함수형식을 사용해야하고 축약형을 사용하면 안된다. 
dimm.classList.add('open') //dimm 에 open 이라는 class 를 추가한다.
// console.log('dimm')
modal.classList.add('open') //dimm 에 open 이라는 class 를 추가한다.

})

close.addEventListener('click',() => {
  dimm.classList.remove('open')
  modal.classList.remove('open')
})

dimm.addEventListener('click',() => {
  dimm.classList.remove('open')
  modal.classList.remove('open')
})

