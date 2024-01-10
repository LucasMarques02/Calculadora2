const divisao = document.getElementById("divisao");
const multiplicacao = document.getElementById("multiplicacao");
const adicao = document.getElementById("adicao");
const subtracao = document.getElementById("subtracao");

const buttonstyle = document.getElementsByClassName("buttonstyle");

const all = document.getElementById("all");

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

const span1 = document.getElementById("span1");

let redColorStatus = false;

function color(){
    if(redColorStatus===true){
        all.style.backgroundImage = "linear-gradient(to top left, rgb(178, 169, 255), rgb(95, 54, 170), rgb(197, 92, 201))";

        divisao.style.backgroundColor = "#752a88";
        multiplicacao.style.backgroundColor = "#752a88";
        adicao.style.backgroundColor = "#752a88";
        subtracao.style.backgroundColor = "#752a88";

        divisao.style.borderColor = "#4c2383";
        multiplicacao.style.borderColor = "#4c2383";
        subtracao.style.borderColor = "#4c2383";
        adicao.style.borderColor = "#4c2383";

        input1.style.borderColor = "#4c2383";
        input2.style.borderColor = "#4c2383";

        all.style.borderColor =  "#4c2383";
        span1.style.color = "#4c2383";
        redColorStatus = false; 

    }

}
      

function theme1(){
        divisao.style.backgroundColor = "#323741";
        multiplicacao.style.backgroundColor = "#323741";
        adicao.style.backgroundColor = "#323741";
        subtracao.style.backgroundColor = "#323741";

        divisao.style.borderColor = "red";
        multiplicacao.style.borderColor = "red";
        subtracao.style.borderColor = "red";
        adicao.style.borderColor = "red";

        input1.style.borderColor = "red";
        input2.style.borderColor = "red";

        all.style.backgroundImage = "none";
        all.style.backgroundColor = "rgba(59, 65, 77, 1)";

        all.style.borderColor =  "red";
        span1.style.color = "linear-gradient(to top left, rgb(48, 31, 194), rgb(52, 74, 202), rgb(0, 225, 255));";
        redColorStatus = false; 

}

function redColor(){
    all.style.borderColor = "#500b0b";
    span1.style.color = "#500b0b";
    all.style.backgroundImage = "linear-gradient(to top left, rgb(250, 126, 126), rgb(143, 8, 8), rgb(250, 126, 126))";
    redColorStatus = true;
    divisao.style.backgroundColor = "red";
    multiplicacao.style.backgroundColor = "red";
    adicao.style.backgroundColor = "red";
    subtracao.style.backgroundColor = "red";

    divisao.style.borderColor = "#500b0b";
    multiplicacao.style.borderColor = "#500b0b";
    subtracao.style.borderColor = "#500b0b";
    adicao.style.borderColor = "#500b0b";

    input1.style.borderColor = "#500b0b";
    input2.style.borderColor = "#500b0b";


}

function divide(){
    const valor1 = input1.value;
    const valor2 = input2.value;

    const resultado = valor1/valor2;

    if(valor1==0||valor2==0){
        span1.textContent = "Impossível dividir por zero!"
        redColor();
    }
    else {
        span1.textContent = resultado;
        span1.style.color = "#f0f0f0";
        color();
    }
}

function multiplica(){
    const valor1 = input1.value;
    const valor2 = input2.value;

    const resultado = valor1*valor2;

    span1.textContent = resultado;
    color();
}

function adiciona(){
    var valor1 = parseInt(input1.value);
    var valor2 = parseInt(input2.value);

    var resultado = valor1+valor2;

    span1.textContent = resultado;
    color();
}

function subtrai(){
    const valor1 = input1.value;
    const valor2 = input2.value;

    const resultado = valor1-valor2;

    span1.textContent = resultado;
    color();
}


divisao.addEventListener("click", divide);
multiplicacao.addEventListener("click", multiplica);
adicao.addEventListener("click", adiciona);
subtracao.addEventListener("click", subtrai);

document.addEventListener("keydown", function(event){
    if(event.key=="L"||event.key=="l"){
        trocadorDeTemas();
    }
});

var contador = new Array(10);

contador[0] = theme1;
contador[1] = color;
contador[2] = redColor;


const numeroDeTemas = 2;
let contador1 = 0;


function trocadorDeTemas(){
    if(contador1==0){
        contador[0]();
    }
    if(contador1==1){
        contador[1]();
    }
    if(contador1==2){
        contador[2]();
    }
    contador++;
    if(contador1==numeroDeTemas){
        contador = 0;
    }
    
}





"function Obstacle(\n    canvasCtx, type, spriteImgPos, dimensions, gapCoefficient, speed,\n    opt_xOffset, opt_isAltGameMode) {\n  this.canvasCtx = canvasCtx;\n  this.spritePos = spriteImgPos;\n  this.typeConfig = type;\n  this.gapCoefficient = Runner.slowDown ? gapCoefficient * 2 : gapCoefficient;\n  this.dimensions = dimensions;\n  this.remove = false;\n  this.xPos = dimensions.WIDTH + (opt_xOffset || 0);\n  this.yPos = 0;\n  this.width = 0;\n  this.gap = 0;\n  this.speedOffset = 0;\n  this.altGameModeActive = opt_isAltGameMode;\n  this.imageSprite = this.typeConfig.type == 'COLLECTABLE' ?\n      Runner.altCommonImageSprite :\n      this.altGameModeActive ? Runner.altGameImageSprite : Runner.imageSprite;\n\n  // For animated obstacles.\n  this.currentFrame = 0;\n  this.timer = 0;\n\n  this.init(speed);\n}"