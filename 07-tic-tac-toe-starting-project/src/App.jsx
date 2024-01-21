import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./components/GameOver"

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
}

const INITIAL_GAMEBOARD = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
]

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X'
  gameTurns.length > 0 && gameTurns[0].player === 'X' && (currentPlayer = 'O');
  return currentPlayer
}

const deriveWinner = (gameBoard,players) => {
  let winner;
  for (const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]
    firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol && (winner = players[firstSquareSymbol])
  }
  return winner;
}

const deriveGameBoard = (gameTurns) => {
  let gameBoard = [...INITIAL_GAMEBOARD.map( arrayItem => [...arrayItem])];

    for (const turn of gameTurns){
        const { square, player } = turn;
        const { row, col } = square;
        gameBoard[row][col] = player;
    }
  return gameBoard;
}

function App() {
  
  const [ gameTurns, setGameTurns ] = useState([])
  const [ players, setPlayers ] = useState(PLAYERS)
  
  const activePlayer = deriveActivePlayer(gameTurns)
  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, players)
  const draw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {   
    setGameTurns( prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex}, player: currentPlayer },...prevTurns]
      return updatedTurns
    })
  }

  const handleRematch = () => {
    setGameTurns([])
  }

  const handleChangeName = (symbol, newName) => {
    setPlayers( prev => {
      return {
        ...prev, 
        [symbol]: newName
      }
    })
  }
  return (
    <main>
      <header className="ticTacToe__header">
        <img src="../public/game-logo.png" alt="" />
        <h1>React Tic-Tac-Toe</h1>
      </header>
      <div id="game-container">
        <ol id='players' className="highlight-player">
          <Player name={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} handleChangeName={handleChangeName}/>
          <Player name={PLAYERS.O} symbol="O" isActive={activePlayer === 'O'} handleChangeName={handleChangeName}/>
        </ol>
        {(winner || draw) && <GameOver winner={winner} handleRematch={handleRematch}/>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
      
    </main>
  )
}

export default App
