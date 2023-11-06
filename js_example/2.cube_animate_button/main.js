

let rotationX=0;
let rotationY=0;

//자바 클래스명 부르는 방법
//const cube = document.querySelector('.box_area')

const cube = document.querySelector('.box_area');
const three = document.querySelector('.box_back h2');


function rotateXAxis(n){

    //오른쪽에서 부터 계산
    rotationX = rotationX + (90*n);
    console.log(rotationX)
    three.style.transform=`rotateX(180deg) rotateY(180deg)`;
    //cube.style.transform="rotateX( " + rotationX + "deg) rotateY(0deg)";
    cube.style.transform=`rotateX(${rotationX}deg) rotateY(0deg)`;

}

function rotateYAxis(n){
    rotationY = rotationY + (90*n);
    console.log(rotationY)
    three.style.transform=`rotateX(0deg) rotateY(0deg)`;
    cube.style.transform=`rotateX(0deg) rotateY(${rotationY}deg)`;
}



function front(){
    cube.style.transform=`rotateX(0deg) rotateY(0deg)`;
}
