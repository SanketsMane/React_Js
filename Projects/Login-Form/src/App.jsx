import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  // Set Your Credentials here - 

  const correctEmail = "text@gmail.com"
  const correctPassword = "12345"

  function handelSubmit(e){
    e.preventDefault();

    if(email === correctEmail && password === correctPassword)
    {
      toast.success("Login Successful")

    }
    else{
      toast.error("Invalid Credentials, Please try again")
    }
  }

   function handleForgotPassword(e) {
    e.preventDefault();
    if(email) {
      toast.info(`Password reset link sent to ${email}`);
    } else {
      toast.warn("Please enter your registered email first.");
    }
  }

  

  return (
    <>
    <div className='bg-white h-90 w-90 shadow-lg rounded-lg p-6 m-6 bg-linear-[25deg,#AFDBF5,white] flex flex-col items-center justify-center'>
     

       <h1>Login Page</h1>
       <form onSubmit={handelSubmit} >
       <input onChange={e => setEmail(e.target.value)} value={email} className="text-gray-400 outline-1 outline-blue-500/100 mt-6 rounded-lg"  placeholder="Enter Your Email Id" ></input>
       <br/>
      <input onChange={e => setPassword(e.target.value)} value={password} className="text-gray-400 outline-1 outline-blue-500/100 mt-6 rounded-lg"   placeholder="Enter Your Password" ></input>
      <br/>

      <button type='submit' className='bg-indigo-500 ... p-2 mt-4 rounded-lg h-10 w-20'>Log In</button>
        <button
            type="button"
            onClick={handleForgotPassword}
            className="text-blue-600 underline mt-2 ml-4"
          >
            Forgot Password?
          </button>
      </form>
      <ToastContainer />
      </div>
      
    </>
  )
}

export default App
