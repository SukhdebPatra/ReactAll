import React,{useState,createContext} from 'react'

const useContext=createContext();


const Context1 = () => {
    const [user,setUser]=useState('Sukhdeb')
  return (
    <>
    <Context1.Provider value={user}>
    <h1>{`Hello ${user}`}</h1>
    <Context2 user={user}/>

    </Context1.Provider>
    

    
    </>
  )
}

const Context2=()=>{

    return (
        <>
        <h1>Context2</h1>
        </>
    )
}

const Context3=()=>{
    return(
        <>
        <h1>Context 3</h1>
        </>
    )
}
export {Context1,Context3,Context2}