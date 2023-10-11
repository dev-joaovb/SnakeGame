// importando fases
import { getAdditionalSquaresF1 } from "./fase1.js"
import { getAdditionalSquaresF2 } from "./fase2.js"
import { getAdditionalSquaresF3 } from "./fase3.js"
import { getAdditionalSquaresF4 } from "./fase4.js"
import { getAdditionalSquaresF5 } from "./fase5.js"
import { getPontuacaoF5 } from "./fase5.js"
import { getAdditionalSquaresF6 } from "./fase6.js"
import { getAdditionalSquaresF7 } from "./fase7.js"
import { getAdditionalSquaresF8 } from "./fase8.js"
import { getAdditionalSquaresF9 } from "./fase9.js"
import { getAdditionalSquaresF10 } from "./fase10.js"
import { getPontuacaoF10 } from "./fase10.js"



const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const score = document.querySelector('.score--value')
const finalScore = document.querySelector('.final-score > span')
const menu = document.querySelector('.menu-screen')
const buttonPlay = document.querySelector('.btn-play')
const buttonBack = document.querySelector('.back')
const iniciarScore = document.querySelector('.score')

const menuIniciar = document.querySelector('.menu-iniciar')
const buttonIniciar = document.querySelector('.play-iniciar')

const menuFase = document.querySelector('.menu-fase')
const buttonNext = document.getElementById('play-next')

const ChamarFazerPontuacao = document.querySelector('.pontuacao-necessaria')
let fazerPontuacao = document.querySelector('.pontuacao-necessaria-score')

const pausar = document.querySelector('.paused')
const pausado = document.querySelector('.pausado')
const continuar = document.querySelector('.continue')
//const audio = new  Audio("../audio/assets_audio.mp3")

let direction, loopId
let fase = 0




const size = 30 // tamanho do quadrado

const initialPosition = { x: 0, y: 0 }

let snake = [initialPosition] /// posições

// quadrados
let additionalSquares = getAdditionalSquaresF1()


let tipoNivel = 250 // valor padrão
let pontuacao = 100 // padrão
fazerPontuacao.innerText = pontuacao

document.getElementById('nivel').addEventListener('change', function () {
    const nivel = this.value

    if(nivel === 'facil'){
        // 250
        tipoNivel = 250
        pontuacao = 100
        fazerPontuacao.innerText = pontuacao
    }else if(nivel === 'normal'){
        //150
        tipoNivel = 150
        pontuacao = 250
        fazerPontuacao.innerText = pontuacao
    }else if(nivel === 'dificil'){
        // 100
        tipoNivel = 100
        pontuacao = 500
        fazerPontuacao.innerText = pontuacao
    }else if(nivel === 'muito-dificil'){
        // 75
        tipoNivel = 75
        pontuacao = 800
        fazerPontuacao.innerText = pontuacao
    }else if(nivel === 'impossivel'){
        // 40
        tipoNivel = 40
        pontuacao = 1000
        fazerPontuacao.innerText = pontuacao
    }

console.log('Nível selecionado: ', nivel)
})
// seleção de fases
document.getElementById('selecaoFase').addEventListener('change', function () {
const selecaoFase = this.value
switch (selecaoFase) {
    case '0':
        fase = 0    
        console.log('Fase 1 selecionada')
        additionalSquares = getAdditionalSquaresF1()
        break;
    case '1':
        fase = 1    
        console.log('Fase 2 selecionada')
        additionalSquares = getAdditionalSquaresF2()
        break;
        
    case '2':
        fase = 2
        additionalSquares = getAdditionalSquaresF3()
        console.log('Fase 3 selecionada');
        break;
        
    case '3':
        fase = 3
        additionalSquares = getAdditionalSquaresF4()
        console.log('Fase 4 selecionada');
        break;

    case '4':
        fase = 4
        pontuacao = getPontuacaoF5()
        fazerPontuacao.innerText = pontuacao
        additionalSquares = getAdditionalSquaresF5()
        console.log('Fase 5 selecionada');
        break;

    case '5':
        fase = 5
        additionalSquares = getAdditionalSquaresF6()
        console.log('Fase 6 selecionada');
        break;

    case '6':
        fase = 6
        additionalSquares = getAdditionalSquaresF7()
        console.log('Fase 7 selecionada');
        break;

    case '7':
        fase = 7
        additionalSquares = getAdditionalSquaresF8()
        console.log('Fase 8 selecionada');
        break;
    
    case '8':
        fase = 8
        additionalSquares = getAdditionalSquaresF9()
        console.log('Fase 9 selecionada');
        break;

    case '9':
        fase = 9
        pontuacao = getPontuacaoF10()
        fazerPontuacao.innerText = pontuacao
        additionalSquares = getAdditionalSquaresF10()
        console.log('Fase 10 selecionada');
        break;
        
    default:
        console.log('Fase desconhecida');
        break;
    }
})
function iniciarJogo(){
  //  const faseSelect = document.getElementById('fase')

    const incrementScore = () => {
        score.innerText = +score.innerText + 10
    }

    const randomNumber = (min, max) =>{
        return  Math.round(Math.random() * (max - min) + min)
    }

    const randomPosition = () =>{
        const number = randomNumber(0, canvas.width - size)
        return Math.round(number / 30) * 30
    }

    const randomColor = () => {
        const red = randomNumber(0, 255)
        const green = randomNumber(0, 255)
        const blue = randomNumber(0, 255)

        return `rgb(${red}, ${green}, ${blue})`
    }


    const food = {
        x:randomPosition(),
        y:randomPosition(),
        color: randomColor()
    }

    const drawFood = () => {

        const {x, y, color} = food

        ctx.shadowColor = color
        ctx.shadowBlur = 12
        ctx.fillStyle = color
        ctx.fillRect(x, y, size, size)
        ctx.shadowBlur = 0
    }

    const drawSnake = () =>{
        ctx.fillStyle = "#ddd"
        
        snake.forEach((position, index) => {

            if(index == snake.length - 1){
                ctx.fillStyle = "white"
            }

            ctx.fillRect(position.x, position.y, size, size)
        })
    }

    const drawSquare = (x, y, color) => {
        ctx.fillStyle = color
        ctx.fillRect(x, y, size, size)
    }

    const drawAdditionalSquares = () => {
        additionalSquares.forEach((square) => {
            drawSquare(square.xx, square.yy, square.color);
        });
    };

    switch (fase) {
        case 1:    
            console.log('Fase 2 selecionada')
            additionalSquares = getAdditionalSquaresF2()
            break;
            
        case 2:
            additionalSquares = getAdditionalSquaresF3()
            console.log('Fase 3 selecionada');
            break;
            
        case 3:
            additionalSquares = getAdditionalSquaresF4()
            console.log('Fase 4 selecionada');
            break;
    
        case 4:
            pontuacao = getPontuacaoF5()
            fazerPontuacao.innerText = pontuacao
            additionalSquares = getAdditionalSquaresF5()
            console.log('Fase 5 selecionada');
            break;
    
        case 5:
            additionalSquares = getAdditionalSquaresF6()
            console.log('Fase 6 selecionada');
            break;
    
        case 6:
            additionalSquares = getAdditionalSquaresF7()
            console.log('Fase 7 selecionada');
            break;
    
        case 7:
            additionalSquares = getAdditionalSquaresF8()
            console.log('Fase 8 selecionada');
            break;
        
        case 8:
            additionalSquares = getAdditionalSquaresF9()
            console.log('Fase 9 selecionada');
            break;
    
        case 9:
            pontuacao = getPontuacaoF10()
            fazerPontuacao.innerText = pontuacao
            additionalSquares = getAdditionalSquaresF10()
            console.log('Fase 10 selecionada');
            break;
            
        default:
            console.log('Fase desconhecida');
            break;
        }
    


    const moveSnake = () => {
    if(!direction) return

        const head = snake[snake.length - 1]

        
        if(direction == 'right'){
            snake.push({ x: head.x + size, y: head.y })
        }

        if(direction == 'left'){
            snake.push({ x: head.x - size, y: head.y })
        }

        if(direction == 'down'){
            snake.push({ x: head.x, y: head.y + size })
        }

        if(direction == 'up'){
            snake.push({ x: head.x, y: head.y - size })
        }

        snake.shift()
    }

    const drawGrid = () => {
        ctx.lineWidth = 1
        ctx.strokeStyle = '#191919'

        for (let i = 30; i < canvas.width; i+= 30){
            ctx.beginPath()
            ctx.lineTo(i, 0)
            ctx.lineTo(i, 600)
            ctx.stroke()

            ctx.beginPath()
            ctx.lineTo(0, i)
            ctx.lineTo(600, i)
            ctx.stroke()
        }
    }

    function estaDentroDoQuadrado(x, y, quadrado) {
        return x >= quadrado.xx && x <= quadrado.xx + size && y >= quadrado.yy && y <= quadrado.yy + size;
    }

    const chackEat = () => {
        const head = snake[snake.length - 1]

        let foodCollidesWithSquare = false;
            additionalSquares.forEach((square) => {
            if (estaDentroDoQuadrado(food.x, food.y, square)) {
                foodCollidesWithSquare = true;
            }
        })

        if(head.x == food.x && head.y == food.y || foodCollidesWithSquare){
            incrementScore()
            snake.push(head)
            //audio.play()

            let x = randomPosition()
            let y = randomPosition()

//            while (snake.find((position) => position.x == x && position.y == y)){
    //            x = randomPosition()
  //              y = randomPosition()
//            }

            do {
                x = randomPosition();
                y = randomPosition();
            } while (additionalSquares.some((square) => estaDentroDoQuadrado(x, y, square)) || snake.find((position) => position.x == x && position.y == y))
            food.x = x
            food.y = y
            food.color = randomColor()
        }

        

        if(score.innerText == pontuacao){
            nextLevel()
        }

    }

    const checkCollision = () => {
        const head = snake[snake.length - 1]
        const canvasLimit = canvas.width - size
        const nextIndex = snake.length - 2
        

        // Verifique se houve colisão com os quadrados adicionais
        let squareCollision = false
        additionalSquares.forEach((square) => {
            if (head.x === square.xx && head.y === square.yy) {
            squareCollision = true
            }
        })

        // verificar se a cobra bateu na parede
        const wallCollision =
            head.x < 0 || head.x > canvasLimit || head.y < 0 || head.y > canvasLimit

        const selCollision = snake.find((position, index) => {
            return index < nextIndex && position.x == head.x && position.y == head.y
        })

        if(wallCollision || selCollision || squareCollision){
            gameOver()
        }
    }

    const nextLevel = () =>{
        direction = undefined

        menuFase.style.display = 'flex'
        canvas.style.filter = 'blur(10px)'
    }

    const gameOver = () => {
       direction = null
       document.removeEventListener('keydown', handleKeydown)
        menu.style.display = 'flex'
        finalScore.innerText = score.innerText
        canvas.style.filter = 'blur(10px)'
    }

    const gameLoop = () => {
        clearInterval(loopId) // Id é para evitar bugs
        ctx.clearRect(0, 0, 600, 600)
        drawGrid()
        drawFood()
        moveSnake()
        drawSnake()
        chackEat()
        checkCollision()

        loopId = setTimeout(() =>{
            gameLoop()
        }, tipoNivel)
        drawAdditionalSquares()
    }


    
    
    gameLoop()

    /*
        document.addEventListener('keydown', ({key}) => {
        if(key == 'ArrowRight' && direction != 'left'){
            direction = 'right'
        }
        
        if( key == 'ArrowLeft' && direction != 'right'){
            direction = 'left'
        }

        if( key == 'ArrowDown' && direction != 'up'){
            direction = 'down'
        } 

        if( key == 'ArrowUp' && direction != 'down'){
            direction = 'up'
        }       
    }) */

    const handleKeydown = ({ key }) => {
        if (key == 'ArrowRight' && direction != 'left') {
          direction = 'right'
        }
      
        if (key == 'ArrowLeft' && direction != 'right') {
          direction = 'left'
        }
      
        if (key == 'ArrowDown' && direction != 'up') {
          direction = 'down'
        }
      
        if (key == 'ArrowUp' && direction != 'down') {
          direction = 'up'
        }
      }

    document.addEventListener('keydown', handleKeydown)
    
    // pausar o jogo
document.addEventListener('keydown', ({ key }) => {
    if (key === 'p') {
        pausar.style.display = 'none'
        pausado.style.display = 'flex'
        continuar.style.display = 'flex'
        if (loopId !== null) {
            clearInterval(loopId); // Pausa o gameLoop
            loopId = null; // Define loopId como nulo para indicar que o jogo está pausado
        } else {
            gameLoop(); // Resume o gameLoop
        }
    } else if(key == 'c'){
        pausar.style.display = 'flex'
        pausado.style.display = 'none'
        continuar.style.display = 'none'
        canvas.style.filter = 'none'
        gameLoop() //continue
    }
});


} // fim função iniciarJogo

buttonIniciar.addEventListener('click', () => {
    pausar.style.display = 'flex'
    iniciarScore.style.display = 'flex'
    ChamarFazerPontuacao.style.display = 'flex'
    menuIniciar.style.display = 'none'
    canvas.style.filter = 'none'
    iniciarJogo()
})

buttonPlay.addEventListener('click', () => {
    score.innerText = '00'
    menu.style.display = 'none'
    canvas.style.filter = 'none'
    loopId = 0
    snake = [initialPosition]
    iniciarJogo()
})

buttonBack.addEventListener('click', () => {
    location.reload()
})

buttonNext.addEventListener('click', () => {
//    proximaFase()
    fase += 1
    menuFase.style.display = 'none'
    canvas.style.filter = 'none'
    score.innerText = '00'
    snake = [initialPosition]
    clearInterval(loopId)
    iniciarJogo()

});

document.addEventListener('keydown', handleKeydown)