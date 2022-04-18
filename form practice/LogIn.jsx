import React,{useState} from 'react'

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [data,setdata]=useState([])

   {/* const SubmitHandler=(e)=>{
        e.preventDefault();
        const newEntry={email:email,password:password}

        setdata([...data,newEntry])
        console.log(newEntry);


    }
*/}
    const SubmitHandler=(e)=>{
        e.preventDefault();
        const newEntry={email:email,password:password}

        setdata([...data,newEntry])

    }

  return (

    <>
    
    <h1 style={{textAlign:'center'}}>LogIn</h1>

    <form className="row g-3 needs-validation" onSubmit={SubmitHandler}>
       
        <div className='col-md-4'>
        <label htmlFor="email" className='form-label'>Email</label>

        <input type="email" name="email" id="email"placeholder='Enter your Email' className='form-label' value={email} onChange={(e)=>(setEmail(e.target.value))}maxLength='15' minLength='10'/>
        </div>
        <div className='col-md-4'>
            <label className='form-label'htmlFor="password">Password</label>
            <input className='form-label' type="password" name="password" id="password" placeholder='password'value={password} onChange={(e)=>(setPassword(e.target.value))}/>
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
    <hr/>
    <form>
        <label htmlFor="datemax"></label>
        <input type="datetime-local" name="" id="" /><br/>

        <div>
            <label htmlFor="datemax">Enter a date before 1980-01-01</label>
           <input type="date" name="datemin" id="datemin" max='1979-12-31'/>


        </div>
        <div>
            <label htmlFor="datemin">Enter a date after 2000-01-01::</label>
            <input type="date" name="datemin" id="datemin" min='2000-01-01' max='2018-01-01'/>


        
        </div>

        <div>
            <label htmlFor="country-code">Country Code</label>
            <input type="text" name="country-code" id="country-code" pattern='[A-za-z]{3}' title='Three letter country code'placeholder='There letter country code only'/>
        </div>
        <div>
            <label htmlFor="phone">Enter a phone No</label>
            <input type="tel" name="phone" id="phone" placeholder=''/>
        </div>

    </form>
    </>
  )
}

export default LogIn