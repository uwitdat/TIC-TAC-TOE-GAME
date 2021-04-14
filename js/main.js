//VARIABLES
let btnsDiv = document.querySelector('.buttons');
let gameText = document.querySelector('.game-text')
let playAgain = document.querySelector('.play-again')

gameState = 0
gameScore = {
    x: 0,
    o: 0,
}

let x = 'X'
let o = 'O'

let scoreX = document.querySelector('.x')
scoreX.innerHTML = `Xs: ${gameScore.x}`
let scoreO = document.querySelector('.o')
scoreO.innerHTML = `Os: ${gameScore.o}`

//DOMS
btnsDiv.addEventListener('click',function (e){
        if(gameState % 2 === 0){   
        e.target.innerText = x
        e.target.disabled = true
        e.target.style.color = 'blue'
        gameState++
        gameText.textContent = 'Os TURN.'
        winner();

        }else{
        e.target.innerText= o
        e.target.disabled = true
        e.target.style.color = 'red'
        gameState++
        gameText.textContent = 'Xs TURN.'
        winner();                
        }
    }
)

function winner(){
    if(btnsDiv.children[0].innerText === x && btnsDiv.children[1].innerText === x && btnsDiv.children[2].innerText === x){
        btnsDiv.children.disabled = true
        btnsDiv.children[0].style.color = 'green';
        btnsDiv.children[1].style.color = 'green';
        btnsDiv.children[2].style.color = 'green';
        gameText.innerHTML = 'Xs WIN!'
        gameScore.x ++
        scoreX.innerHTML = `Xs: ${gameScore.x}`
        playAgain.style.display = 'block';
    }
}
