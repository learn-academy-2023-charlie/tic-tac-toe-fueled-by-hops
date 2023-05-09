import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  handleClick('i'); {
    const board = this.state.board.slice();
    board['i'] = this.state.currentPlayer;
    this.setState({
      board: board,
      currentPlayer: this.state.currentPlayer === "X" ? "O" : "X",
    });
  }

const handleClick = (selectedIndex) => {
  //alert(selectedIndex)


  const gridUpdate = [...squares];
  gridUpdate [selectedIndex] ="🖕";
  setSquares(gridUpdate);
}

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square squares={squares} handleClick={handleClick}/>
      
    </>
  )
}

export default App