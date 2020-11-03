const movie = document.querySelector('.movie')

window.addEventListener('scroll',function(){
  const value = window.scrollY
  movie.style.clipPath = ` circle(${value}px at center center)`
  // movie.style.clipPath = `fill-box circle(${value}px at center center)` 실행안됨 확인하기!!
})