const books = ['html','css','javascript']
// 1. 배열을 문자열로 만들기
console.log(books)
{
  const result = books.join('/')
  console.log(result)
 
}

// 2.문자열을 배열로 만들기
{
  const books = 'react, vue, angular'

  const result = books.split(',')
  const result2 = books.split()
 
  console.log(result)
  console.log(result2)
  
}

// 3. 배열을 반대로 만들기
const numbers = [1,2,5,9,20]
console.log(numbers)
const result = numbers.reverse()
console.log(result)

// 4. 특정요소를 제거한 새로운 배열 만들기
const numbers2 = [1,3,5,7,9]
console.log(numbers2)
const result3 = numbers2.splice(0,2)
console.log(result3)

const result4 = numbers2.slice(2)
console.log(result4)
console.log(numbers2)

// 소주
// const sojus = [
//   {name: '대선', price:1200, sale: true, score:86},
//   {name: '좋은데이', price:1100, sale: false, score:92},
//   {name: '진로', price:1150, sale: true, score:80},
//   {name: '금복주', price:980, sale: false, score:60},
//   {name: '참이슬', price:1250, sale: true, score:46}
// ]

class Soju {
  constructor (name, price, sale, score) {
    this.name = name
    this.price = price
    this.sale = sale
    this.score =score
  }
}

const sojus = [
  new Soju('대선',1200,true,96),
  new Soju('좋은데이',1100,false,92),
  new Soju('진로',1250,true,80),
  new Soju('금복주',980,false,60),
  new Soju('참이슬',1250,true,46),
  new Soju('안동소주',2250,true,46)

]

console.clear()


// 5. score가 80인 소주를 찾기
{
const result = sojus.find(soju => soju.score === 80)
console.log(result)

// const result = sojus.find(function(soju) {
//   return soju.score === 80
//})
}

// 6. 판매중인 소주를 찾아서 새로운 배열로 만들기
{
 const result = sojus.filter(item => item.sale)
console.log(result)
// const result = sojus.filter(item => !item.sale) 미판매중인 소주 찾기


}

// 7. score(점수)만 있는 새로운 배열 만들기
{
const result = sojus.map(soju => soju.score) 
console.log(result)

}


// 8. score가 50보다 작은 소주가 있는지 확인하기
{
  const result = sojus.some(soju => soju.score < 50) //조건만족하는 인수가 있으면 true 출력
console.log(result)

}

// 9. 소주들의 평균 가격을 계산하기
{
  const result = sojus.reduce((a,b) => {
    // console.log(a)
    // console.log(b)
    return a + b.price //조건을 만족하는 값은 합을 return
  }, 0) // a=0 초기값을 의미한다. 
  console.log(result/sojus.length) //평균값을 출력
}

//10. 점수를 문자로 만들기
{
  const result = sojus //
  .map(soju => soju.score)
  .join('/')

  console.log(result)
}


//11. 점수가 낮은 순으로, 문자열로 정렬하기
{
  const result = sojus//
  .map(soju => soju.score) //새로운 배열을 만드는 매서드
  .sort((a,b) => a-b) //정렬매서드 낮은순 정렬 a-b, 높은순으로 정렬 b-a
  .join() //문자열로 만들어 주는 매서드

  console.log(result)
}


// 비동기 통신 -> callback, primise,  async await
//클로즈
