import React,{useState} from 'react'


const UseState = () => {
    const [firstName,setFirstName]=useState('');

    const [lastName, setLastName]= useState('');

    const handleFirstName=(e)=>{
        setFirstName(e.target.value);
    }

    const handleLastName=(e)=>{
     setLastName (e.target.value);
    }

  return (
    <>
    <h1>UseState</h1>

    <input type='text' value={firstName} onChange={handleFirstName}/>
    <br/>
    <input type='text' value={lastName} onChange={handleLastName}/>

    <p>hello, <span>{firstName} {lastName}</span></p>
    
    <button type='submit'>Submit</button>

    </>
  )
}

export default UseState