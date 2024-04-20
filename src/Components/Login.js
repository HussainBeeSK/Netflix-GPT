import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[issignin ,setissignin] = useState(true)
  const ToggletoSignIn = () => {
    setissignin(!issignin)

  }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='logoimage'/>
      </div>
      <form className='absolute w-3/12 my-28 mx-auto right-0 left-0  bg-black bg-opacity-80 m-2 p-12  text-white'>
        <h1 className='font-bold text-3xl py-5 px-2'>{issignin ? "Sign In" : "Sign Up"}</h1>
        {!issignin &&
        (<input type='text' placeholder='Full Name' className='my-4 p-3 w-full rounded-md placeholder-white bg-gray-800' required/>)}

        <input type='text' placeholder='Email or Phone Number' className='my-4 p-3 w-full rounded-md placeholder-white bg-gray-800'/>
        <input type='password' placeholder='Password'className='my-4 p-3 w-full rounded-md placeholder-white bg-gray-800'/>
        <button className='my-4 p-2 bg-red-600 font-semibold w-full rounded-md'>{issignin ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 text-center cursor-pointer hover:underline'>Forgot Password?</p>
        <p>{issignin ? "New to Netflix ? " : "Alreay a user ? "}<span 
        onClick={ToggletoSignIn} 
        className='font-sans font-semibold cursor-pointer hover:underline'>{issignin ? "Sign Up Now" : "Sign In Now"}</span></p>
      </form>
      

    </div>
  )
}

export default Login