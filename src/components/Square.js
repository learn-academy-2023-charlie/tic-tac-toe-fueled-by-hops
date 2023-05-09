import React from 'react'

const Square = (props) => {
  console.log(props.squares)
  return (
  <>
  render() {
 (
    <div className="board">
      {this.state.board.map((cell, i) => (
        <div className="cell" key={i} onClick={() => this.handleClick(i)}>
          {cell}
        </div>
      ))}
    </div>
  )
}
  <div id="grid" >
   {props.squares.map((value,index)=> {
    return(
      <div className="square" 
      key={index}
      onClick={() => {props.handleClick(index)}}>
      {value}
      </div>
    )
   })}
</div>
</>
)
}
  

export default Square
