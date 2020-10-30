const bg = ['orange','blue','red','yellow','green']
const hex = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f',]

const color = document.getElementById('color')
const bgBtn = document.getElementById('bgBtn')
const hexBtn = document.getElementById('hexBtn')

function getBgNum() {
return Math.floor(Math.random()*bg.length)
}

function getHexNum() {
  return Math.floor(Math.random()*hex.length)
}

bgBtn.addEventListener('click',function(){
  
  // const randomBgNum = Math.floor(Math.random()*bg.length) //Math.random() 함수는 0~1 사이의 숫자를 랜덤으로 추출하는 함수
  const randomBgNum = getBgNum()  //미리 만들어 놓은 getBgNum()함수를 호출 -객체지향프로그래밍

  document.body.style.backgroundColor = bg[randomBgNum]
  color.textContent = bg[randomBgNum]
  
})

hexBtn.addEventListener('click',function() {
  let hexColor = '#'
  console.log(hexColor)
  for(let i=0; i<6 ; i++) {
     hexColor += hex[getHexNum()]  // hexColor = hexColor + hex[getHexNum()]
   
  }

  document.body.style.backgroundColor = hexColor
  color.textContent = hexColor
})