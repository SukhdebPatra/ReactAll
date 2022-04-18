import React, { useState } from 'react'
import usecount from './usecount';

const CustomHook = () => {
    const [count,setCount]=useState(0);
    usecount(count)
    console.log('hello outside');
  return (
    <>
    <center>

  
    <div style={{marginTop:'40px'}}>{count}</div>
    <button className='btn btn-danger'onClick={()=>setCount(count+1)}>click me</button>
    </center>

    </>
  )
}

export default CustomHook