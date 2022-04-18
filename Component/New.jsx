import React from "react";
import { useForm } from "react-hook-form";

let New =()=>{
    const [register,handleSubmit,errors]=useForm();

 const onSubmit=(data)=>console.log(data);

    return (
        <>
        <h1>React hook form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label ref={register}>Username</label><br/>
        <input type='text'/><br/>
        <label>Email</label><br/>
        <input type='email'/><br/>

        <label>Password</label><br/>
        <input type='password'/><br/>

        <button className="btn-primary" type="submit">Submit</button>

        </form>


        </>
    )

}

export default New