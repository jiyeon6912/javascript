const section = document.querySelector('section')

window.addEventListener('scroll', function() {
  console.log(scrollY)
  let value = window.scrollY  //window 에서 scrollY 위,아래 방향으로 일어날때 값이 0보다 큰값으로 증가 됨
  section.style.clipPath = `circle(${value}px at center center)` //px의 값이 크지면서 보여지는 원영역이 커짐
})