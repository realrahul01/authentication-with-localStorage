import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'
import { useState } from 'react';

const Login=()=>{    
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [emailError, setEmailError] = useState('')
const [passwordError, setPasswordError] = useState('')


const navigate = useNavigate()


  const errorHandler2=()=>{
    setTimeout(()=>{
      setEmailError('')
    },2000)
  }

  const errorHandler3=()=>{
    setTimeout(()=>{
      setPasswordError('')
    },2000)
  }

  const emailRegex = /^\S+@\S+\.\S+$/


const loginhandler=()=>{

    if(!email){
        setEmailError("*Please enter email")
        errorHandler2()
        return 
      }
      if(!emailRegex.test(email)){
        setEmailError("Please enter valid email")
        errorHandler2()
        return 
      }
      if(!password){
        setPasswordError("*Please enter password")
        errorHandler3()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        return 
      }
      if(password.length < 5){
        setPasswordError("*Password must contain atLeat 5 character")
        errorHandler3() 
        return 
      }
    let userDetails = JSON.parse(localStorage.getItem('isLogin'))
    console.log(userDetails)
    console.log(userDetails.email)

    if(userDetails.email == email){
            if(userDetails.password == password){   
                alert('Login Successfully')
                navigate('/')
            }else{
                alert('wrong Password')
            }
    }else{
        alert('Invalid User details')
    }


    
}

    return (
        <div className="login">
            <h1>Login</h1>
            <div className="inp_main">
                <label htmlFor="email">Email</label>
            <div>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <div className='error'>{emailError}</div>
            </div>
            </div>

            <div className="inp_main">
                <label htmlFor="password">Password</label>
            <div>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <div className='error'>{passwordError}</div>
            </div>
            <Button className='btn1' variant="primary" onClick={loginhandler}>Login</Button>
            </div>
        </div>
    )
}

export default Login;