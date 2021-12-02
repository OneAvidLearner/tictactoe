let counter = 2;
const gameBoard = (() => {//creates the gameboard

    const board = new Array(9)

    const getBoardValue = (i) => board[i];

    const setBoardValue = (i, value) =>{//checks if the gameboard already has a value
        if(board[i]!='X' && board[i] != 'O'){
            board[i] = value;
        }
        else{
            console.log(`Cannot play twice`);
        }
    }

    return {getBoardValue, setBoardValue}
})();


const displayController = (() =>{
    
    const gameContainer = document.querySelector('.game-container');
    

    const boardPieces = new Array(9);

    for (let i = 0; i < boardPieces.length; i++) {
        boardPieces[i]=document.createElement('div');
        boardPieces[i].setAttribute('data-index',i);
        boardPieces[i].classList.add('cards');
        boardPieces[i].addEventListener('click', function(e){
            
            if(counter%2 == 0){
                gameBoard.setBoardValue(this.getAttribute('data-index'),'X');
            }
            else{
                gameBoard.setBoardValue(this.getAttribute('data-index'),'O');
            }
            boardPieces[i].textContent =gameBoard.getBoardValue(this.getAttribute('data-index'));
            counter++;
        })
        gameContainer.appendChild(boardPieces[i]);
 
    }

    const setDisplay = (arr)=>{
        let i = 0;
        boardPieces.forEach(element => {
            if(arr[i]){
            element.textContent = arr[i];
            }
            i++
        });
    }

    return{setDisplay}
})();

const player = (inputChoice) =>{


    return {};
}


const game = (() =>{
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



    document.querySelector('body').appendChild(chooseSide)

    

    return{};

})();








