import React from 'react'
import { useForm } from 'react-hook-form'

const Validation = () => {
const {handleSubmit,register,formState:{errors}}=useForm();

const onSubmit=values=>console.log(values);

  return (
    <div>
        
         <h1 style={{color:'blueviolet',textAlign:'center'}}>Form validation</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email"
        {...register('email',{required:'Required',
    pattern:{
        value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message:'invalid email address'
    }})}
        />

        {errors.email && errors.email.message}

        <input {...register('username',{
            validate:value=> value !=='admin'|| "nice try"
        })}
        />

        {errors.username && errors.username.message}


<button type='submit'>Submit</button>

    </form>
    
    
    </div>
  )
}

export default Validation