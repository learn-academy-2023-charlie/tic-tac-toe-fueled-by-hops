import React, { useState, useEffect } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(""))
  const [go, setGo] = useState("circle")
  const [winningMessage, setWinningMessage] = useState(null)
  
  const message = "It is now " + go + "'s go."
  console.log(squares)

  const checkScore = () => {
    const winningCombos = [
      [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
    ]
    winningCombos.forEach(array => {
      let circleWin = array.every(square => squares[square] === "circle")
       if (circleWin){
        setWinningMessage("Circle Wins!")
        return
       }
    })

    winningCombos.forEach(array => {
      let crossWin = array.every(square => squares[square] === "cross")
       if (crossWin){
        setWinningMessage("Cross Wins!")
        return
       }
    })

  }

  useEffect(() => {
    checkScore()
  }, [squares])

      return (
        <div className="app">
          <div id="grid">
            {squares.map((square, index)=>
            <Square
                key={index}
                id={index}
                squares={squares}
                setSquares={setSquares}
                go={go}
                setGo={setGo}
                square={square}
                winningMessage={winningMessage}
              />)}
          </div>
          <p>{winningMessage || message}</p>
        </div>

      )



  return (
    <>

      <h1>Tic Tac Toe</h1>
      <div className="square">
       <div id="grid" >{squares.map((squares, index) => <Square 
                                             key={index} 
                                             id={index} 
                                             squares={squares}
                                            /> )}
                                             </div>
        </div>
      
      
    </>
  )
}

export default App