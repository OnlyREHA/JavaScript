const lenis = new Lenis({
    duration:1.2,
    easing:(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    
})


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


//--------------------------------------------------
let backColor = document.querySelectorAll("[data-bgcolor]");
//속성 data-bgcolor가 있는 요소들의 부름. 배열
console.log(backColor)

//backColor.forEach((item, index, Func) => {})
//item에는 배열의 요소들이 차례로 들어옴

backColor.forEach((colorSection, i) => {
  let prevBg = i === 0? "": backColor[i - 1].CDATA_SECTION_NODE.backColor;

  ScrollTrigger.create({
    trigger:colorSection,
    start:'top 50%',
    end:'bottom 5%',
    //markers:1,
    onEnter:() => gsap.to("#contents",{
      backgroundColor:colorSection.dataset.bgcolor
    }),
    onLeaveBack:() => gsap.to("#contents",{
      backgroundColor:colorSection.dataset.bgcolor
    }),
  
  })
})

const horSection = gsap.utils.toArray('.port_desc .port');
//모든 요소들은 horSection이라는 변수에 배열로 저장한다.
//console.log(horSection)

const horiz = gsap.to(horSection,{
  
  // xPercent:- 95 * ( horSection.length - 1)
  
  x:(- 95 * ( horSection.length - 1)) + "%",
  scrollTrigger:{
    trigger:'.port_desc',
    start:'top 20%',
    end:'+=5000',  
    //애니메이션이 시작되는 시점부터 5000px 떨어진 곳에서 애니가 끝난다
    //markers:1,
    scrub:1,  //스크롤에 반응
    pin:true,  //화면고정


  },
})