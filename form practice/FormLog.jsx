import React,{useState} from 'react'

const FormLog = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const[data,setData]=useState([]);
    
    const SubmitHandler=(e)=>{
        e.preventDefault();

        if(email&&password){
            const newEntry={id:new Date().getTime.toString, email,password}
        
        setData([...data,newEntry])
        console.log(newEntry);

        setEmail('');
        setPassword('')

        }else{
            alert('data need')
        }
        
    }
    
  return (
    <>
      <center>
    <h1>Form Log</h1>
  

   
    <form onSubmit={SubmitHandler}>
        <div>
            <label htmlFor="email" className='form-label'>Email</label>
            <input type="email" name="text" id="text" className='form-label' value={email} onChange={(e)=>setEmail(e.target.value)} />

        </div>
        <div>
            <label htmlFor="password" className='form-label'>password</label>
            <input className='form-label' type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <input type="submit" value="submit" />
    </form>
    <div>
        {
            data.map((curElem)=>{
                return (
                    <div key={curElem.id}> 
                        <p>{curElem.email}</p>
                        <p>{curElem.password}</p>
                        </div>
                )
            })
        }
        

    </div>
    </center>

    </>
  )
}

export default FormLog