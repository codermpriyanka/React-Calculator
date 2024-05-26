import React, { useState } from 'react'
const[value,setValue]=useState('');

function Calc() {

  return (
    <>
    <form>
        <div>
        <input type='text' value={value}></input>    
        </div>
        <div>
            <input type='button' placeholder='1'onClick={(e)=>setValue(value+e.target.value)}></input>
        </div>
        
    </form>
      
    </>
  )
}

export default Calc
