import { useState } from "react"
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom'


const SignUp=()=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')


    const navigate = useNavigate()

    const errorHandler1=()=>{
        setTimeout(()=>{
          setNameError('')
        },2000)
      }
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
      const errorHandler4=()=>{
        setTimeout(()=>{
          setConfirmPasswordError('')
        },2000)
      }
      const emailRegex = /^\S+@\S+\.\S+$/

const signUphandler=()=>{
    if(!name){
        setNameError("*Please enter email")
        errorHandler1()
       return;
      }
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
      
      if(password !== confirmPassword){
        setConfirmPasswordError("*Password must be same")
        errorHandler4()
        return 
      }

      let user = {
        name,
        email,
        password,
        confirmPassword
      }

      localStorage.setItem('isLogin', JSON.stringify(user))

      navigate('/login')

}



    return(
        <div className="signup">
            <h1>Sign Up</h1>
            <div className="inp_main">
                <label htmlFor="name">Name:</label>
            <div>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                <div className='error'>{nameError}</div>
                
            </div>
            </div>

            <div className="inp_main">
                <label htmlFor="email">Email:</label>
            <div>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <div className='error'>{emailError}</div>
            </div>
            </div>
            <div className="inp_main">
                <label htmlFor="password">Password:</label>
            <div>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <div className='error'>{passwordError}</div>
            </div>
            </div>
            <div className="inp_main">
                <label htmlFor="confirm password">Confirm Password:</label>
            <div>
                <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                <div className='error'>{confirmPasswordError}</div>
            </div>
            </div>
            <div className="btn_stl">
                <Button className='btn1' variant="primary" onClick={signUphandler}>Sign Up</Button>
            </div>
        </div>
    )
}

export default SignUp;