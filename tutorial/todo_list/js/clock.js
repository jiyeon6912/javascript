const clock = document.querySelector('.clock')

function getTime() {
  // console.log('시간을 가져옵니다.')
  const now = new Date()  //new 는 새로운 객체를 생성한다.는 의미
  // console.log(now) //now는 현재 실제 시간을 나타내는 객체가 됨

  const hour = now.getHours()
  const minute = now.getMinutes()
  const second = now.getSeconds()

  const h = `${hour}` < 10 ? `0${hour}` : `${hour}`
  const m = `${minute}` < 10 ? `0${minute}` : `${minute}`
  const s = `${second}` < 10 ? `0${second}` : `${second}`

  clock.textContent = `${h} : ${m} : ${s}`
}

getTime()

// setInterval(함수,시간)
setInterval(function(){
  getTime()
}, 1000)  //1000 (1초)간격으로 시간을 가져오는 함수