import React, { createContext } from 'react'
import Comp2 from './Comp2'

const BioData=createContext();


const UseContext = () => {


  return (
    <div style={{backgroundColor:'red'}}>
      <h2>Comp A</h2>
      <BioData.Provider value={'sukhdeb patra'}>
      <Comp2/>


      </BioData.Provider>
      
    </div>
  )
}

export default UseContext
export {BioData}