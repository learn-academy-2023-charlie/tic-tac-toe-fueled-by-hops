import React from 'react'

const Square = ({id, go, square}) => {
  
  const handleClick = (s) => {
    const taken = s.target.firstChild.classList.contains("circle") || 
    s.target.firstChild.classList.contains("cross")
  
    if(!taken){
        if(go === "circle"){
          s.target.firstChild.classList.add("circle")
        }
        if(go === "cross"){
          s.target.firstChild.classList.add("cross")
        }
    }  
  }
  return (
  <>
 <div className="square" id={id} onClick={handleClick}>
 <div className={square}></div>
 </div>

</>
)
}

  

export default Square
