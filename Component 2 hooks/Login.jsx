import React,{useState} from "react";

const Login=()=>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [number, setNumber] = useState('')

  const [data, setData] = useState([])

const SubmitForm=(e)=>{
  e.preventDefault();

  const newEntry={email:email,password:password,number:number}
  setData([...data,number,newEntry])
  console.log(newEntry);

}

return (
  <>
  <h1 className="text-center">LOGIN</h1>
  <form className="row g-3 needs-validation" onSubmit={SubmitForm}>
    
    <div className="col-md-4">
      <label className="form-label" htmlFor="email">Email</label>
    <input className="form-label" type="email" name="email" id="email" value={email} onChange={(e)=>(setEmail
      (e.target.value))}/>
    
    </div>

    <div className="col-md-4">
      <label className="form-label" htmlFor="password">Password</label>
      <input className="form-label" type="password" name="password" id="password"value={password} onChange={(e)=>{setPassword(e.target.value)}} />
    </div>

    <div className="col-md-4">
      <label className="form-label" htmlFor="phone">PhoneNO</label>
      <input className="form-label" type="number" name="number" id="number"value={number} onChange={(e)=>{setNumber(e.target.value)}} />

    </div>
    <button className="btn btn-primary" type="submit">Submit</button>
  </form>

  <div>
    {
      data.map((curEle)=>{
        return (
          <div>
            <p>{curEle.email}</p>
            <p>{curEle.password}</p>
            <p>{curEle.number}</p>


            </div>
        )
      })
    }
  </div>
  </>
)
}

export default Login