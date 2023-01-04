import React from 'react'

function ChildComponent(props) {
   
  return (
    <div>
        {/* <button onClick={props.parentHandler}>Greet Parent</button> */}
        <button onClick={()=>props.parentHandler('Guru')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent