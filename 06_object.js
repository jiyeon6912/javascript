// 오브젝트 object
// - 자바스크립트 데이타
// - 상태와 행동을 가진다.
// - ex) phone의 상태(porperties) -> color, size..
//       phone의 행동(methods) -> ring,take a picture, play music (매서드)
// - 형식 { 키 : 값}

    // 1. object

    const user = {
      name : 'Picaso',
      age : 30,
      email : 'picaso@gmail.com',
      works : [
        {id:1, title:'게르니카', price:10000, like:50},
        {id:2, title:'아비뇽의 처녀들', price:30000, like:80},
        {id:3, title:'우는 여인', price:50000, like:200},
      ],
      // login : function() {
      //   console.log('user logged in!')
      // }
    

    login() {
      console.log('user logged in!')
    },

    logout() {
    console.log('user logged out!')
   },

  goodWorks: function() {

  console.log('피카소의 대표작')
  this.works.forEach(work => {
    console.log(`${work.id}. ${work.title}. ${work.price}원. 좋아요(${work.like})`)
  })
  // console.log(this.works)
}
}
console.log(user)
console.log(user.name)
console.log(user.goodworks)


console.log(user.age)
//수정
user.age = 45
console.log(user.age)

//타입확인
console.log(typeof user)

//methods
user.login()
user.logout()
user.goodWorks()

// 2.Math object
// ceil: ƒ ceil() 올림
// floor: ƒ floor() 내림
// max: ƒ max()
// min: ƒ min()
// round: ƒ round() 반올림
console.log(Math)
console.log(Math.PI)

const sum = 9.7
console.log(Math.round(sum))
console.log(Math.floor(sum))
console.log(Math.ceil(sum))
console.log(parseInt(sum)) //정수변환

const num = Math.random()
console.log(num)


// 0~9 사이의 정수 출력
console.log(Math.random() * 10)
console.log(Math.floor(Math.random() * 10))


// 1~10 사이의 정수 출력
console.log(Math.random() * 10)
console.log(Math.floor(Math.random() * 10) + 1)

// 배열 랜덤 출력
const food = ['라면','김밥','우동']
console.log(food[0])
console.log(food[1])
console.log(food[2])

const randomnum = Math.floor(Math.random() * food.length)
console.log(food[randomnum])

// 객체지향: 모든것을 객체로 구성할 수 있다. 객체란 상태와 행동으로 구분함.
// 객체의 틀을 만드는 것이 클래스이다. 하나의 클래스를 통해서 다양한 객체를 생산해 낼 수 있다. 



