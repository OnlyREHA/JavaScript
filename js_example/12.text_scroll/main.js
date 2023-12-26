
let pTag1=document.querySelector('.first-parallel');
let pTag2=document.querySelector('.second-parallel');

let textArr1='Welcome Hello Welcome Hello Welcome Hello Welcome Hello'.split(' ');
//split() -> 띄워쓰기를 기준으로 잘라서 배열로 만든다.
console.log(textArr1)

let textArr2='My Portfolio My Portfolio My Portfolio My Portfolio'.split(' ');
console.log(textArr2)

// let arr=[];
// console.log(...textArr1)  //Welcome Hello Welcome Hello Welcome Hello Welcome Hello
// arr.push(...textArr1)
// console.log(arr)

let count1=0;
let count2=0;

initTexts(pTag1, textArr1);
initTexts(pTag2, textArr2);

function initTexts(element, textArray){
    textArray.push(...textArray)  
    //8개의 배열안에 아이템을 복사하여 다시 배열 뒤에 넣는다.
    console.log("함수안" + textArray)

    for(let i=0; i<textArray.length; i++){
        element.innerHTML += `${textArray[i]}\u00A0\u00A0\u00A0` 
        //\u00A0 --> javascript에서 공백을 나타냄
    }
}


function animate(){
    count1++;
    //console.log(count1)
    count2++;

    count1 = marqueeText(count1,pTag1,-1)
    count2 = marqueeText(count2,pTag2,1)

    window.requestAnimationFrame(animate)
    //setInterval  --> 어떤 시간마다 할 일(메모리를 많이먹음)
}

function marqueeText(count, element, direction){
    //.scrollHeight --> 보이지 않는 공간이라도 공간의 높이값
    //보이지 않는 공간일지라도 스크롤해서 확인할수 있는 공간의 높이

    //.scrollWidth -->
    console.log("element.scrollWidth" + element.scrollWidth)
    console.log("count" + count)
    if(count>element.scrollWidth/2){
        count=0;
        element.style.transform=`translate(0,0)`;
    }

    element.style.transform=`translate(${count * direction}px,0)`;

    return count
}

function scrollHandler(){
    count1 += 25;
    count2 += 25;
}

animate()

window.addEventListener(`scroll`,scrollHandler)