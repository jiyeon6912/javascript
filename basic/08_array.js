// Array 배열

// 1. 배열 만들기
const arr1 = new Array()
console.log(arr1)

const arr2 = [1, 3, 5, 7, 9]
console.log(arr2)
console.log(typeof arr2)

const arr3 = ['what','are','u','doing',100,true]
console.log(arr3)

const arr4 = ['a',{model:'apple', price: 1000},
                  {model:'galaxy', price: 2000}
             ]
console.log(arr4)
console.log(arr4[1].model)
console.log(arr4[2].model)


// 2.배열 출력: 배열은 직접적인 데이터를 저장하는 것이 아니라 값이 저장되어 있는 공간을 참조하는 것
// (주소를 참조)이므로 const로 값을 지정해서 참조값을 변경하는것이 가능하다.
const books = ['html','css','javascript','vue','jquery']
console.log(books)
console.log(books.length)
console.log(books[0])
console.log(books[2])
console.log(books[books.length-1])

console.clear()
// 3.loop 출력
// for문
for(let i=0; i<books.length; i++) {
     console.log(books[i])
}

// for of
for(let book of books) {
     console.log(book)
}

// forEach
books.forEach(function(book) {
     console.log(book)
})

books.forEach((item) => {
     console.log(item)
})

// books.forEach item => console.log(item) 한줄코드일때 이와같이 간단히 (),{} 생략해서 코딩할 수 있다.

// 4.추가, 삭제
// 뒤에 추가
books.push('jquery')
console.log(books)
books.push('vue')
console.log(books)

// 앞에서 추가
books.unshift('react')
console.log(books)

// 뒤에서 삭제
books.pop()
console.log(books)

// 앞에서 삭제
books.shift()
console.log(books)

// splice : 지정한 위치에서 삭제 혹은 추가
// books.splice(2)  //2번째 배열부터 이후 모두 삭제
console.log(books)
books.splice(2,1)  //2번째 배열에서 1개를 삭제
console.log(books)
books.splice(2,1,'new1','new2')  //2번째 배열에서 1개를 삭제한 후 new1과 new2를 삽입한다.
console.log(books)

// 두개의 배열을 합치기
const books2 = ['git','nodejs']
const newBook =  books.concat(books2)
console.log(newBook)

// 5. 배열 검색
// console.clear()
// console.log(books)
// console.log(books.indexOf)






