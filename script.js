let currentTurn = true;
const boardPieces = new Array(9);


const gameBoard = (() => {//creates the gameboard

    let board = new Array(9).fill(null)

    const getBoardValue = (i) => board[i];
    

    const setBoardValue = (i, value) =>{//checks if the gameboard already has a value
            board[i] = value;
    
    }

    const checkWinner = ()=>{
        let val ;
        if(currentTurn){
            val = 'X'
        }
        else{
            val = 'O'
        }
        let wins =[ [0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6]]
        return wins.some(combinations =>{
            return combinations.every(index => {
                return boardPieces[index].textContent == val;
            })
        })
    }

    const checkDraw = ()=>{
        return board.every(val => val != null)

    }

    const resetBoard = ()=>{
         board = new Array(9).fill(null)
         displayController.setDisplay();
    }

    return {getBoardValue, setBoardValue, checkWinner, resetBoard, checkDraw}

})();





const displayController = (() =>{
    
    const gameContainer = document.querySelector('.game-container');
    const winner = document.querySelector('.winner');
    const winnerText = document.querySelector('.winner-text');
    const restart = document.querySelector('.restartBtn');

    restart.addEventListener('click',function(e){
        winner.classList.remove('show');
        currentTurn = true;
        gameBoard.resetBoard();
        
    


    })
    

    

  

    const setDisplay = ()=>{
    gameContainer.textContent = '';
        for (let i = 0; i < boardPieces.length; i++) {
            boardPieces[i]=document.createElement('div');
            boardPieces[i].setAttribute('data-index',i);
            boardPieces[i].classList.add('cards');
            boardPieces[i].addEventListener('click', function(e){
                
                if(currentTurn){
                    gameBoard.setBoardValue(this.getAttribute('data-index'),'X');
                   
                }
                else{
                    gameBoard.setBoardValue(this.getAttribute('data-index'),'O');
                }
                this.textContent =gameBoard.getBoardValue(this.getAttribute('data-index'));
                if (gameBoard.checkWinner()){
                    winner.classList.add('show');
                    winnerText.textContent = `${currentTurn?'Player 1':'Player 2'} Wins!`;
                }
                else if (gameBoard.checkDraw()){
                    winner.classList.add('show');
                    winnerText.textContent = `It's a Draw!`;
                }
                switchTurn()
            }, {once:true})
            gameContainer.appendChild(boardPieces[i]);
     
        }
    }
    //Creates the area below the gameboard
    const chooseSide = document.createElement('div')
    chooseSide.classList.add('choice');
    const playerOne = document.createElement('div');
    playerOne.classList.add('players');
    const playerTwo = document.createElement('div');
    playerTwo.classList.add('players');
    playerOne.textContent = 'Player 1';
    playerTwo.textContent = 'Player 2';
    chooseSide.appendChild(playerOne);
    chooseSide.appendChild(playerTwo);
    playerOne.style.backgroundColor='#3949AB';



    document.querySelector('body').appendChild(chooseSide)

    

    return{setDisplay}
})();

const player = (inputChoice) =>{


    return {};
}


const startGame = (() =>{


    displayController.setDisplay();
    return{};

})();

const switchTurn = function(){
    currentTurn = !currentTurn;
}






