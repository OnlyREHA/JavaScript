
let allText = document.querySelectorAll('.text');
let delay = 0;

//allText.forEach((item,item의 index)=>{})
allText.forEach((el,idx)=>{
    el.style.animationDelay = `${delay}s`;
    el.style.zIndex = allText.length - idx;
    el.classList.add('base-ani');
    delay += 0.15
})

document.getElementById('spring').addEventListener('mousemove',(e) => {
    let innerWidth = window.innerWidth;  //viewport의 넓이값
    let innerHeight = window.innerHeight;  //viewport의 높이값

    let clientX = e.clientX;  //기준이 viewport
    let clientY = e.clientY;
    //console.log(clientX + "," + clientY)

    let percentX = clientX/innerWidth;
    let maxRangeX = innerWidth * 0.15;
    let minX = innerWidth/2 - maxRangeX;
    let maxX = innerWidth/2 + maxRangeX;
    let difX = maxX - minX;
    let pxOffset = difX * percentX;
    let left = minX + pxOffset;
    console.log(left)

    let percentY = clientY/innerHeight;
    let maxRangeY = innerHeight * 0.15;
    let minY = innerHeight/2 - maxRangeY;
    let maxY = innerHeight/2 + maxRangeY;
    let difY = maxY - minY;
    let pxOffsetY = difY * percentY;
    let top = minY + pxOffsetY;
    console.log(top)


    allText.forEach((el,idx)=>{
        //el.animate([애니메이션의속성],{animate-옵션})
        el.animate([
            {top:`${top}px`, left:`${left}px`}
        ],{
            duration:500,
            fill:'forwards',
            delay:idx * 20,
        })
    })
})