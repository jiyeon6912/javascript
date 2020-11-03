const  content = document.querySelectorAll('.content')
console.log(content)

for(let i=0; i < content.length; i++) {
  content[i].addEventListener('click',function() {
    console.log('hahaha')
    console.log(this) //this는 클릭을 한 content div를 가리킨다.
    
    this.classList.toggle('active') //this는 일반형,표준형함수에서만 작동함. arrow(축약형)함수일때는 작동안함.
  })
}

