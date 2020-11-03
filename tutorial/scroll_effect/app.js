const section = document.querySelector('section')

window.addEventListener('scroll', function() {
  console.log(scrollY)
  let value = window.scrollY
  section.style.clipPath = `circle(${value}px at center center)`
})