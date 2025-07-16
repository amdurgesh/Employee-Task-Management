import React, { useState } from 'react';

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler = (e)=>{
      e.preventDefault()
      handleLogin(email,password)
      setEmail("")
      setpassword("")
      
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}
         className='flex flex-col items-center justify-center'>
            <input 
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
             required className=' outline-none border-2 border-emerald-600 py-3 px-5 text-xl rounded-full bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter your Email'
            />
            <input 
            value={password}
            onChange={(e)=>{
              setpassword(e.target.value)
            }}
            required className=' outline-none border-2 border-emerald-600 py-3 px-5 text-xl rounded-full mt-3 bg-transparent placeholder:text-gray-400' type="password" placeholder='Enter your password' />
            <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
