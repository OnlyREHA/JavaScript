
let Acc = document.getElementsByClassName('accordion');

console.log(Acc)  //[값1, 값2, 값3] 배열
console.log(Acc[0])
console.log(Acc.length)  //배열안에 값의 수

// for확인 순서
// for(①; ②; ④){
//     ③
// }

for(let i=0; i<Acc.length; i++){
    Acc[i].addEventListener('click', function(){
        this.classList.toggle('active')

        let panel = this.nextElementSibling;//나의 다음요소(동생)

        if(panel.style.maxHeight){
            panel.style.maxHeight=null;
        }else{
            //scrollHeight: 숨어있는 높이값을 포함한 높이값을 찾아준다.
            panel.style.maxHeight=panel.scrollHeight + "px";
        }
    })
}