
let stageEle = document.querySelector('.stage'),
    houseEle = document.querySelector('.house'),
    maxScrollValue,  //실제 스크롤이 움직이는 높이값
    mousePos = {x:0, y:0};

function resizeHandler(){
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
}
window.addEventListener('scroll',function(){
    let scrollPer = pageYOffset / maxScrollValue;
    //console.log(scrollPer)
    let zMove = scrollPer * 1970 - 990;
    houseEle.style.transform = `translateZ(${zMove}vw)`;

})

window.addEventListener('mousemove',function(e){
    mousePos.x = (e.clientX / window.innerWidth) * 5;
    mousePos.y = -(e.clientY / window.innerHeight) * 5;
    stageEle.style.transform = `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`
})

window.addEventListener("resize",resizeHandler)

resizeHandler()

//Swiper
var swiper = new Swiper(".mySwiper", {});

// gsap

let tl = gsap.timeline();
     tl.to('.wall-front07 .title',{autoAlpha:1, duration:1})
        .to('.wall-front07 .title img', { 
            keyframes:{
                "0%":{x:1000},
                "25%":{x:500,y:200},
                "50%":{x:200,y:100},
                "75%":{x:500,y:200},
                "100%":{x:-1000,y:500},
            },
            duration:3,
            stagger:1,
            repeat:-1
        })

        gsap.to('.last.left',{x:0,duration:2, repeat:-1, yoyo:true})
        gsap.to('.last.right',{x:1000,duration:2, repeat:-1, yoyo:true})