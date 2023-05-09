import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(""))
  const [go, setGo] = useState("circle")
  
  const message = "it is now" + go + " 's go."
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
              />)}
          </div>
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