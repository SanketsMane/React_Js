import React,{useState, useContext} from 'react';
import UserContext from '../context/UserContext';


function Login() {

    const [username , setUsername] = useState(' ');
    const [password , setPassword] = useState(' ');


    const {setuser} = useContext(UserContext); 

    const handelSubmit =(e) =>{
            e.preventDefault();
            setuser({username, password} )


    }
    return ( 
        <div>

            <h1>Login</h1>
            <input value={username} onChange={(e)=> setUsername(e.target.value)} type='text' placeholder='Enter Values' className='border-2 border-gray-500 rounded-md p-2 m-2' />
            <input value={password} onChange={(e) => setPassword(e.target.value) } type='password' placeholder='enter Password' className='border-2 border-gray-500 rounded-md p-2 m-2' />
            <button onClick={handelSubmit} className='bg-blue-500 text-white p-2 rounded-md m-2'>Login</button>
        </div>
     );
}

export default Login;