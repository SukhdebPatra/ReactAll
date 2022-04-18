import React, { useState } from "react";

const Lgin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newEntry, setNewEntry] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if(email&&password){
        
        const allEntry = { id:new Date().getTime().toString() ,email,password };

        setNewEntry([...newEntry, allEntry]);
        console.log(allEntry);
    
        setEmail('');
        setPassword('');
        
    }else{
        alert('plz Fill all Data')
    }
   
  };

  return (
    <>
    <center>

 
      <h1>Log in form using hooks</h1>
      <form action="" onSubmit={submitHandler}>
        <div className="mt-5">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="" className="form-label">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <button className="btn btn-danger" type="submit">
            Log IN
          </button>
        </div>
      </form>
      {newEntry.map((ele) => {
        return (
          <div key={ele.id}>
            <p>{ele.email}</p>
            <p>{ele.password}</p>
          </div>
           
        );
      })}
        </center>
    </>
  );
};

export default Lgin;
