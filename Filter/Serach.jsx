import React,{useState} from 'react'
import Result from './Result'

const Search=()=>{
    const [da, setDa] = useState("")
    const inputt=(event)=>{
        const d=event.target.value
        console.log(d);
        setDa(d)
    }
    return(
        <>
       <center>

     
        <div className='searchbar'>
        <input type="text" value={da} placeholder='search bar' onChange={inputt}/>
        </div>
        </center>
      {da === "" ? null : <Result name={da}/>}
        </>
    )
}
export default Search