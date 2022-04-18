import React,{useState,useEffect} from 'react'

const Effect = () => {

    const [count, setCount] = useState(0)

    useEffect(()=>{
       if(count>=1){
          document.title=`chats (${count})`
       }
       else{
           document.title=`chats`
       }
    },[])
    console.log('Hello outside');
  return (
   <> <center>
       <h1>Use Effect hooks</h1>

       <h1>{count}</h1>

       <button className='btn btn-info' onClick={()=>setCount(count + 1)}>Click me</button>


   </center>
   
   </>
  )
}

export default Effect