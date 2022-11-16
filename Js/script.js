const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
let contador = 0

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500); 
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); //com o getComputedStyle consigo pegar qualquer estilo aplicado a propriedade mario, então apenas passo o que desejo. Replace apaguei px. O '+' na frente tratou para number

    if(pipePosition <= 120  && pipePosition > 0 && marioPosition < 80) { 
        pipe.style.animation = 'none';
        pipe.style.left = '${pipePosition)px'; //catmario para

        mario.style.animation = 'none';
        mario.style.bottom = '${marioPosition)px';

        mario.src = './imagens/catOver.gif';
        mario.style.width = '300px'
        mario.style.marginLeft = '-30px'
        mario.style.bottom = '65px'       

        clearInterval(loop); //limpa o loop

    } else if (pipePosition <= 6  && pipePosition > 0 && marioPosition > 80) {

        contador = contador+1;
        document.querySelector('.contador').innerHTML = contador.toString();
        console.log(contador);

    }
     
}, 10);   

document .addEventListener('keydown', jump); 
document .addEventListener('click', jump); 