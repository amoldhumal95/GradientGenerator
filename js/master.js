let startColor = document.getElementById('StartColor');
let endColor = document.getElementById('EndColor');
let currentDirection = 'to bottom';
let outputCode = document.getElementById('code');

function setDirection(value,_this){
    let directions = document.querySelectorAll(".buttons button");
    
    for(let i of directions){
        i.classList.remove('active');
    }
    _this.classList.add('active');
    currentDirection = value;
}

function generateCode(){

    document.getElementById('copy').style.backgroundColor = 'blue';
    document.getElementById('copy').innerText = 'copy';

    outputCode.value = `background-image: linear-gradient(${currentDirection}, ${startColor.value}, ${endColor.value});`
    document.getElementsByTagName("body")[0].style.backgroundImage = `linear-gradient(${currentDirection}, ${startColor.value}, ${endColor.value})`;
}


function copyText(){
    outputCode.select();
    document.execCommand('copy');
    
    document.getElementById('copy').style.backgroundColor = 'green';
    document.getElementById('copy').innerText = 'copied';
}