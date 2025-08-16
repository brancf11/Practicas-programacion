const circle = document.getElementById('circle1')
const container = document.querySelector('.container')

let positionX = 0;
let positionY = 0;
let isjumping = false; 
let isCrouching = false;
const step = 1;

const heys = {}
console.log(keys)

const containerWidth = container.offsetwidth;
const circlewidth = circle.offsetWidth;


document.addEventListener('keydown', (e) => {
    keys[e.key] = true;
    console.log(keys)
    console.log(Object.keys(keys).length)
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
    console.log(keys)
    console.log(Object.keys(keys).length)
});


function gameLoop(){
    let currentStep = step;
    
    if (keys['x']){
        currentStep = step * 2;
    }

    if(keys['ArrowRight']){
        circle.style.transition = null
        positionX += currentStep
        if(positionX > (containerWidth - circlewidth) / 2){
            positionX = (containerWidth - circlewidth) / 2;
        }
    }


    if(keys['ArrowLeft']) {
        circle.style.transition = null
        positionX += currentStep
        if(positionX <  -(containerWidth - circlewidth) / 2){
            positionX = -(containerWidth - circlewidth) / 2;
        }
    }

       
    if(keys['ArrowUp'] && !isjumping){
    isjumping = true;
    positionY = -80;
    circle.style.transition = 'transform 0.2s ease-in-out';
    setTimeout(() => {
        positionY = 0;
        isjumping = false;
    }, 300);
}


if(keys['ArrowUp'] && !isCrouching){
    isCrouching = true;
    circle.style.transition = 'transform 0.2s ease-in-out';
    setTimeout(() => {
        isjumping = false;
    }, 200);
}



const scaleY = isCrouching ? 0.5 : 1;
circle.style.transform = `translateX(${positionX}px) translateY(${positionY}px) scaley(${scaleY})`;

}