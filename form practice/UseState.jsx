import React,{useState} from 'react'

const UseState = () => {
    const [email, setEmail] = useState('')
    const [password,setPassword]=useState('')

    const [data,setData]=useState([]);

    const submitHandler=(e)=>{
        e.preventDefault();

        const newEntry={email:email,password:password}

        setData([...data,newEntry]);


    }

  return (
    <>
   

  
<nav className='navbar navbar-expand-lg bg-light text-primary '>
    <h1 className='navbar-brand'> UseState Form</h1>

</nav>
<center>
<form action="" onClick={submitHandler}>

    <div className="form-group">
        <label htmlFor="email">Email</label>
        <input className='form-control' type="text" name="email" id="email" value={email} onChange={(e)=>(setEmail(e.target.value))}/></div>


            <div className='from-group'>
                <label htmlFor="password">Password</label>
                <input className='form-control' type="password" name="password" id="password" value={password} onChange={(e)=>(setPassword(e.target.value))} />

            </div>
            <input type="submit" value="submit" />
</form>
<div>
        {
            data.map((curEle)=>{
                return ( 
                    <div>
                        <p>{curEle.email}</p>
                        <p>{curEle.password}</p>
                    </div>
                )
            })
        }
    </div>
</center>
    </>
  )
}

export default UseState