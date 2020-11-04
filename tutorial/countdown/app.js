// 오늘 날짜의 요일을 구하기
//const days = ['일','월','화','수','목','금','토']
// const now = new Date()
// console.log(now)
// const today = now.getDay()
// console.log(today)
// console.log(days[today])  //오늘 날짜의 요일을 구하는 코드

//특정한 날짜의 요일구하기
// const days = ['일','월','화','수','목','금','토']
// const eventDay = new Date("2020-12-25") //특정한 날의 날짜구하기
// console.log(eventDay)
// const theDay = eventDay.getDay() 
// console.log(days[theDay])

const week = ['일','월','화','수','목','금','토']
const lastDay = document.getElementById('last_day')

const dDay = new Date(2020, 11, 24, 18, 0)  
//2020년12월24일 18시0분 단, 이표기법은 월이 0월부터 시작하므로 12월을 표현하기위해서는 11로 바꿈.
//mdn date 객체에 검색하면 확인할 수 있음
const year = dDay.getFullYear() //매서드는 함수이므로 반드시 ()괄호가 필요하다.
const month = dDay.getMonth() + 1  //월은 1작은 수(월)을 가져오므로 +1을 한다. 수시로 consol.log()를 활용하면서 결과를 확인해야함.
const date = dDay.getDate()
const day = week[dDay.getDay()]
console.log(day)
const hour = dDay.getHours()
const minute = dDay.getMinutes()


lastDay.textContent = `${year}년 ${month}월 ${date} (${day}) ${hour}:0${minute}`
const countDown = document.getElementById('countdown')
const clocks = countDown.querySelectorAll('h3')
console.log(countdown)

 //tick() 함수 시작!!
function tick() {  
  // console.log('tick')
  const dDayTime = dDay.getTime()
  // console.log(getTime())  //1970년 1월1일 1시 기준으로 밀리second를 나타냄  date mdn 로 검색 확인가능.
  const nowTime = new Date().getTime()
  // console.log(nowTime)

  const t = dDayTime - nowTime
  // console.log(t)

  // 남은시간 표시
  // 1s = 1000ms
  // 1m = 60s
  // 1h = 60m
  // 1d = 24h

  const days = Math.floor(t / (1000*60*60*24))
  const hours = Math.floor((t % (1000*60*60*24)) / (1000*60*60))
  const mintues = Math.floor((t % (1000*60*60))/(1000*60))
  const seconds = Math.floor((t % (1000*60))/1000)
  // console.log(days)
  // console.log(hours)
  // console.log(days,hours,mintues,seconds)

  const times = [days,hours,mintues,seconds]

  function addZero(i) {
    if ( i < 10 ) {
      return ( i = `0${i}`)
    } else {
      return i
    }
  }


   clocks.forEach((item,index) => {  //item 은 h3을 의미한다. index는 배열의 인덱스를 의미한다.
    //  console.log(item,index)
    //  item.innerHTML = times[index]
     item.innerHTML = addZero(times[index])
    })

     if( t < 0) {
       clearInterval(timer)
       countDown.innerHTML = '<h3>수고하셨습니다.</h3>'  //t는 남은 시간을 의미한다.
     } 
} 
//tick()함수끝!!


const timer = setInterval(tick,1000)  //setInterval(함수명,실행간격초단위 1000=1초)

tick()

