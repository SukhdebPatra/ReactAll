import React, { useContext } from 'react'
import { BioData } from './UseContext1'
const Comp3 = () => {
    
    const name=useContext(BioData)

  return (

   <>
   <h1>Component 3</h1>
   <h1>hello Com 3 {name}</h1>
   </>

  )
}

export default Comp3
