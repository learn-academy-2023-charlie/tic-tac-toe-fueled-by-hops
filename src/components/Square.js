import React from 'react'

const Square = ({id, go, setGo, square, squares, setSquares, winningMessage}) => {
 
  const handleClick = (e) => {
    const taken = e.target.firstChild.classList.contains("circle") || 
    e.target.firstChild.classList.contains("cross")
      if(!taken){
        if(go === "circle"){
          e.target.firstChild.classList.add("circle")
          handleSquareChange("circle")
          setGo("cross")
        }
        if(go === "cross"){
          e.target.firstChild.classList.add("cross")
          handleSquareChange("cross")
          setGo("circle")
        }
    }  
  }

  const handleSquareChange = (className) =>{
     const nextSquares = squares.map((square, index) => {
        if  (index === id){
          return className
        } else{
          return square
        }
      })
      setSquares(nextSquares)
  }
  return (
  <>
 <div className="square" id={id} onClick={!winningMessage && handleClick}>
 <div className={square}></div>
 </div>

</>
)
}

export default Square
