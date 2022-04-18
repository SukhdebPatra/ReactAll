import React,{useState} from 'react'

const ChartApi = () => {
  const [name,setName]=useState('')
  

  return (
   <>
   <h1 className='chart-heading' >Chart Api</h1>
   <div>
     <input type="text" placeholder='Name' />
     <input type="text" placeholder="job" />
    <input type="text" placeholder="gender"/>

    
    
   </div>
   </>
  )
}

export default ChartApi