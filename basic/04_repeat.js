// 반복문
//  조건이 참일 때 실행

let i = 3
console.log('while 반복문==================')

while(i > 0) {
console.log(`i는 ${i}`)
i--
}

// for문
// 변수초기화; 조건; 증감식
console.log('for 반복문==================')
for(let j = 3; j > 0; j--) {
console.log(`j는 ${j}`) 
}

for(let k = 1; k<=3; k++) {
console.log(`k는 ${k}`)
}

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }

//for문을 활용한 구구단 출력하기


const day = ['월','화','수','목','금']
for (let index = 0; index < day.length; index++) {
  // const element = array[index];
  console.log(day[index])
  
}

// break, continue
// 0~10 -> 0에서 7까지만 출력 : break
 for(let ii = 0; ii <= 10; ii++) {
   if(ii > 7) {
     break
   }
   console.log(ii)
 }

//  0~10 -> 홀수만 출력을 원할 때 :continue

for(let kk=1; kk <=10; kk++) {
  if(kk%2 === 0 ) {
    continue
  }
  console.log(kk)
}