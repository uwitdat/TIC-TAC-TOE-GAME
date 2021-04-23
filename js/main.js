//VARIABLES
// boardState = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// randomizer = [];


//BOARD STATE MAPPING:



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
        // updateBoardState(e.target.innerText)    
        // computerMoves()
        winner();
        ties();


        } else {


        e.target.innerText= o
        e.target.disabled = true
        e.target.style.color = 'red'
        gameState++
        gameText.textContent = 'Xs TURN.'
        // updateBoardState(e.target.innerText)
        winner();     
        ties();

        }
    }
)

//SET BOARD STATE TO BUTTON INNERTEXT
// function updateBoardState(btn){
//     boardState[0][0] = btnsDiv.children[0].innerText
//     boardState[0][1] = btnsDiv.children[1].innerText
//     boardState[0][2] = btnsDiv.children[2].innerText
//     boardState[1][0] = btnsDiv.children[3].innerText
//     boardState[1][1] = btnsDiv.children[4].innerText
//     boardState[1][2] = btnsDiv.children[5].innerText
//     boardState[2][0] = btnsDiv.children[6].innerText
//     boardState[2][1] = btnsDiv.children[7].innerText
//     boardState[2][2] = btnsDiv.children[8].innerText  
    
//     console.log(boardState)
// }




// function computerMoves(){

//     }

 
       


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
        for(index of [a,b,c]){
            btnsDiv.children[index].style.color = 'green';
        }       
        renderGrey();
        xWin();

    }if(btnsDiv.children[a].innerText === o && btnsDiv.children[b].innerText === o && btnsDiv.children [c].innerText === o){
        for(index of [a,b,c]){
            btnsDiv.children[index].style.color = 'green';
        } 
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


    
