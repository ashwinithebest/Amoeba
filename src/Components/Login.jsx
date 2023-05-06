import React, { useState } from 'react'
import { useAuth } from '../Utils/auth'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation() 
    const redirectpath = location.state?.path || '/'
    console.log(location)


    const handleLogin = ()=>{
        auth.login(user);
        navigate(redirectpath,{replace:'true'});
    }
  return (
    <div>
        <label>
            <input type='text' onChange={(e)=>setUser(e.target.value)}/>
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login