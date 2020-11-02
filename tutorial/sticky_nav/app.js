window.addEventListener('scroll',function() {
  console.log('hello')
  const header = document.querySelector('header')
  header.classList.toggle('sticky',window.scrollY > 0) //조건이 참이면 sticky가 붙는다.
  console.log(window.scrollY)
})