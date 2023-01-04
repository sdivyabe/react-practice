import React from 'react'

function FunctionClick() {
  const handleClick=()=>{
    console.log("Click");
  }
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FunctionClick 