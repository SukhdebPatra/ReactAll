
import React,{useState} from 'react'

const TodoList = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [project, setProject] = useState('')
  return (
    <>
    <h1>Todo List</h1>
     <div className="container">
         <div className="row">
             <div className="col">
                 <form action="" >
                     <input type="text" placeholder='Ente your Name' value={name} className='mr-4' onChange={(e)=>setName(e.target.value)}  />



                 </form>
             </div>
         </div>
     </div>
        
    </>
  )
}

export default TodoList