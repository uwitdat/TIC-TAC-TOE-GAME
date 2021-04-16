//VARIABLES
gameState = 0

gameScore = {
    x: 0,
    o: 0,
    ties: 0,
}

round = 1

let x = 'X'
let o = 'O'

let btnsDiv = document.querySelector('.buttons');
let gameText = document.querySelector('.game-text')
let playAgain = document.querySelector('.play-again')
let scoreX = document.querySelector('.x')
let scoreO = document.querySelector('.o')
let scoreTies = document.querySelector('.ties')

let roundText = document.querySelector('.round')
roundText.textContent = `Round: ${round}`

//DOMS
playAgain.addEventListener('click', function (e){
    reset()
    round ++
    roundText.textContent = `Round: ${round}`
    playAgain.style.display = 'none'
})

btnsDiv.addEventListener('click',function (e){
    if(e.target.tagName !== 'BUTTON') return;

        if(gameState % 2 === 0){   
        e.target.innerText = x
        e.target.disabled = true
        e.target.style.color = 'blue'
        gameState++
        gameText.textContent = 'Os TURN.'
        winner();
        ties();

        } else {

        e.target.innerText= o
        e.target.disabled = true
        e.target.style.color = 'red'
        gameState++
        gameText.textContent = 'Xs TURN.'
        winner();     
        ties();
        }
    }
)

// ALL POSSIBLE INDEX OUTCOMES FOR WINNING CONDITION
outcomeLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function winner(){
for (line of outcomeLines) {
    let [a, b, c] = line;
    if(btnsDiv.children[a].innerText === x && btnsDiv.children[b].innerText === x && btnsDiv.children [c].innerText === x){
        btnsDiv.children[a].style.color = 'green';
        btnsDiv.children[b].style.color = 'green';
        btnsDiv.children[c].style.color = 'green';
        renderGrey();
        xWin();

    }if(btnsDiv.children[a].innerText === o && btnsDiv.children[b].innerText === o && btnsDiv.children [c].innerText === o){
        btnsDiv.children[a].style.color = 'green';
        btnsDiv.children[b].style.color = 'green';
        btnsDiv.children[c].style.color = 'green';
        renderGrey();
        oWin();   
        } 
    }
}

function renderGrey(){
    for(let btn of btnsDiv.children){
        if(btn.style.color != 'green'){
            btn.style.color = 'grey';
        }
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
        btn.innerText = 'null'

        gameState = 0
    }
}

function ties(){
    if(gameText.innerHTML.includes("TURN") && gameState === 9){               
        gameScore.ties ++
        scoreTies.innerHTML = `Ties: ${gameScore.ties}`;
        gameText.innerHTML = 'ITS A TIE!'
        disableButtons();
        playAgain.style.display = 'block';
    }
}

function xWin(){
    gameText.innerHTML = 'Xs WIN!'
    gameScore.x ++
    disableButtons();
    scoreX.innerHTML = `Xs: ${gameScore.x}`
    playAgain.style.display = 'block';
}

function oWin(){
    gameText.innerHTML = 'Os WIN!'
    gameScore.o ++
    disableButtons();
    scoreO.innerHTML = `Os: ${gameScore.o}`
    playAgain.style.display = 'block';
}

