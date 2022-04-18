import React,{useEffect,useState} from 'react'


const First = () => {
    const [count,setCount]=useState(0);



    useEffect(()=>{
      if(count>=1){
        document.title=`chats(${count})`

      }
      else{
        document.title=`chats`
      }
        console.log('hello useEffect');
    },[count]);

    console.log('hello outside');

  return (
   <><center>
        <h2>UseEffect works</h2>

        <div>{count}</div>

        <button className='btn btn-danger' onClick={()=> setCount(count+1)}>Click</button>

   </center>
  

   
   </>
  )
}

export default First