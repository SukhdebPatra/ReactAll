import React,{useState} from 'react'

const SpOpr = () => {
    const [myObject, setObject] = useState({
        MyName:'sukhdeb', myAge:25, Degree:'MCA'
    })

    const changeObject=()=>{
        setObject({...myObject,MyName:'Sukhdeb Patra'})
        

    }

  return (
    <>
    <center>
    <h1 style={{color:'royalblue'}}>Spread Oprator</h1>
    <div>
        <h1>Name:My name is {myObject.MyName} age IS {myObject.myAge} and my degree {myObject.Degree}</h1>
        <button className='btn btn-danger' onClick={changeObject}>Update</button>
    </div>

    </center>
 
    </>
  )
}

export default SpOpr