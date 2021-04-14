//VARIABLES
let btnsDiv = document.querySelector('.buttons');
let gameText = document.querySelector('.game-text')
let playAgain = document.querySelector('.play-again')

gameState = 0

gameScore = {
    x: 0,
    o: 0,
    ties: 0,
}

let x = 'X'
let o = 'O'

let scoreX = document.querySelector('.x')
scoreX.innerHTML = `Xs: ${gameScore.x}|`
let scoreO = document.querySelector('.o')
scoreO.innerHTML = `Os: ${gameScore.o}|`
let scoreTies = document.querySelector('.ties')
scoreTies.innerHTML = `Ties: ${gameScore.ties}|`

playAgain.addEventListener('click', function (e){
    reset()
})

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
        btnsDiv.children[0].style.color = 'green';
        btnsDiv.children[1].style.color = 'green';
        btnsDiv.children[2].style.color = 'green';
        gameText.innerHTML = 'Xs WIN!'
        gameScore.x ++
        disableButtons();
        scoreX.innerHTML = `Xs: ${gameScore.x}`
        playAgain.style.display = 'block';
    }   if(btnsDiv.children[0].innerText === o && btnsDiv.children[1].innerText === o && btnsDiv.children[2].innerText === o){
        btnsDiv.children[0].style.color = 'green';
        btnsDiv.children[1].style.color = 'green';
        btnsDiv.children[2].style.color = 'green';
        gameText.innerHTML = 'Os WIN!'
        gameScore.o ++
        disableButtons();
        scoreO.innerHTML = `Os: ${gameScore.o}`
        playAgain.style.display = 'block';
    }   if(btnsDiv.children[3].innerText === x && btnsDiv.children[4].innerText === x && btnsDiv.children[5].innerText === x){
        btnsDiv.children[3].style.color = 'green';
        btnsDiv.children[4].style.color = 'green';
        btnsDiv.children[5].style.color = 'green';
        gameText.innerHTML = 'Xs WIN!'
        gameScore.x ++
        disableButtons();
        scoreX.innerHTML = `Xs: ${gameScore.x}`
        playAgain.style.display = 'block';
    }   if(btnsDiv.children[3].innerText === o && btnsDiv.children[4].innerText === o && btnsDiv.children[5].innerText === o){
        btnsDiv.children[3].style.color = 'green';
        btnsDiv.children[4].style.color = 'green';
        btnsDiv.children[5].style.color = 'green';
        gameText.innerHTML = 'Os WIN!'
        gameScore.o ++
        disableButtons();
        scoreO.innerHTML = `Os: ${gameScore.o}`
        playAgain.style.display = 'block';
    }   if(btnsDiv.children[6].innerText === x && btnsDiv.children[7].innerText === x && btnsDiv.children[8].innerText === x){
        btnsDiv.children[6].style.color = 'green';
        btnsDiv.children[7].style.color = 'green';
        btnsDiv.children[8].style.color = 'green';
        gameText.innerHTML = 'Xs WIN!'
        gameScore.x ++
        disableButtons();
        scoreX.innerHTML = `Xs: ${gameScore.x}`
        playAgain.style.display = 'block';
    }   if(btnsDiv.children[6].innerText === o && btnsDiv.children[7].innerText === o && btnsDiv.children[8].innerText === o){
        btnsDiv.children[6].style.color = 'green';
        btnsDiv.children[7].style.color = 'green';
        btnsDiv.children[8].style.color = 'green';
        gameText.innerHTML = 'Os WIN!'
        gameScore.o ++
        disableButtons();
        scoreO.innerHTML = `Os: ${gameScore.o}`
        playAgain.style.display = 'block';
    }   if(btnsDiv.children[0].innerText === x && btnsDiv.children[3].innerText === x && btnsDiv.children[6].innerText === x){
        btnsDiv.children[0].style.color = 'green';
        btnsDiv.children[3].style.color = 'green';
        btnsDiv.children[6].style.color = 'green';
        gameText.innerHTML = 'Xs WIN!'
        gameScore.x ++
        disableButtons();
        scoreX.innerHTML = `Xs: ${gameScore.x}`
        playAgain.style.display = 'block';
    }   if(btnsDiv.children[0].innerText === o && btnsDiv.children[3].innerText === o && btnsDiv.children[6].innerText === o){
        btnsDiv.children[0].style.color = 'green';
        btnsDiv.children[3].style.color = 'green';
        btnsDiv.children[6].style.color = 'green';
        gameText.innerHTML = 'Os WIN!'
        gameScore.o ++
        disableButtons();
        scoreO.innerHTML = `Os: ${gameScore.o}`
        playAgain.style.display = 'block';
    }   if(btnsDiv.children[1].innerText === x && btnsDiv.children[4].innerText === x && btnsDiv.children[7].innerText === x){
        btnsDiv.children[1].style.color = 'green';
        btnsDiv.children[4].style.color = 'green';
        btnsDiv.children[7].style.color = 'green';
        gameText.innerHTML = 'Xs WIN!'
        gameScore.x ++
        disableButtons();
        scoreX.innerHTML = `Xs: ${gameScore.x}`
        playAgain.style.display = 'block';
    }   if(btnsDiv.children[1].innerText === o && btnsDiv.children[4].innerText === o && btnsDiv.children[7].innerText === o){
        btnsDiv.children[1].style.color = 'green';
        btnsDiv.children[4].style.color = 'green';
        btnsDiv.children[7].style.color = 'green';
        gameText.innerHTML = 'Os WIN!'
        gameScore.o ++
        disableButtons();
        scoreO.innerHTML = `Os: ${gameScore.o}`
        playAgain.style.display = 'block';
    }   if(btnsDiv.children[2].innerText === x && btnsDiv.children[5].innerText === x && btnsDiv.children[8].innerText === x){
        btnsDiv.children[2].style.color = 'green';
        btnsDiv.children[5].style.color = 'green';
        btnsDiv.children[8].style.color = 'green';
        gameText.innerHTML = 'Xs WIN!'
        gameScore.x ++
        disableButtons();
        scoreX.innerHTML = `Xs: ${gameScore.x}`
        playAgain.style.display = 'block';
    }   if(btnsDiv.children[2].innerText === o && btnsDiv.children[5].innerText === o && btnsDiv.children[8].innerText === o){
        btnsDiv.children[2].style.color = 'green';
        btnsDiv.children[5].style.color = 'green';
        btnsDiv.children[8].style.color = 'green';
        gameText.innerHTML = 'Os WIN!'
        gameScore.o ++
        disableButtons();
        scoreO.innerHTML = `Os: ${gameScore.o}`
        playAgain.style.display = 'block';
    }   if(btnsDiv.children[0].innerText === x && btnsDiv.children[4].innerText === x && btnsDiv.children[8].innerText === x){
        btnsDiv.children[0].style.color = 'green';
        btnsDiv.children[4].style.color = 'green';
        btnsDiv.children[8].style.color = 'green';
        gameText.innerHTML = 'Xs WIN!'
        gameScore.x ++
        disableButtons();
        scoreX.innerHTML = `Xs: ${gameScore.x}`
        playAgain.style.display = 'block';
    }   if(btnsDiv.children[0].innerText === o && btnsDiv.children[4].innerText === o && btnsDiv.children[8].innerText === o){
        btnsDiv.children[0].style.color = 'green';
        btnsDiv.children[4].style.color = 'green';
        btnsDiv.children[8].style.color = 'green';
        gameText.innerHTML = 'Os WIN!'
        gameScore.o ++
        disableButtons();
        scoreO.innerHTML = `Os: ${gameScore.o}`
        playAgain.style.display = 'block';
    }   if(btnsDiv.children[2].innerText === x && btnsDiv.children[4].innerText === x && btnsDiv.children[6].innerText === x){
        btnsDiv.children[2].style.color = 'green';
        btnsDiv.children[4].style.color = 'green';
        btnsDiv.children[6].style.color = 'green';
        gameText.innerHTML = 'Xs WIN!'
        gameScore.x ++
        disableButtons();
        scoreX.innerHTML = `Xs: ${gameScore.x}`
        playAgain.style.display = 'block';
    }   if(btnsDiv.children[2].innerText === o && btnsDiv.children[4].innerText === o && btnsDiv.children[6].innerText === o){
        btnsDiv.children[2].style.color = 'green';
        btnsDiv.children[4].style.color = 'green';
        btnsDiv.children[6].style.color = 'green';
        gameText.innerHTML = 'Os WIN!'
        gameScore.o ++
        disableButtons();
        scoreO.innerHTML = `Os: ${gameScore.o}`
        playAgain.style.display = 'block';
    }   
}


function disableButtons(){
    for(let btn of btnsDiv.children){
        btn.disabled = true
        if(btn.innerText === 'null'){
            btn.style.color = 'white';
        }
    }
}

function reset(){
    for(let btn of btnsDiv.children){
        btn.removeAttribute('disabled');
        btn.style.color = 'white';
        btn.innerText = '1'
        gameText.innerHTML = 'Play Again!'
    }
}