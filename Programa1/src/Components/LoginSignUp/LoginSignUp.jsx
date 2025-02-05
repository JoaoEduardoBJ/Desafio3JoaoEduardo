import React from 'react'
import './LoginSignUp.css'

import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import google_icon from '../Assets/google.png'


const LoginSignUp= () =>{
    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Audio</div>
                <div className='quote'>It's modular and designed to last</div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder='Email'/>
                </div>
                <div className='input'>
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Password'/>
                </div>
            </div>
            <div className='forgot-password'>Forgot Password</div>
            <div className='submit-container'>
                <div className='submit-sign'>
                    Sign In</div>
                <div className='submit-google'>
                <img src={google_icon} alt="Google" style={{ width: '20px', marginRight: '10px' }} />
                Sign in with Google</div>
                <div className='submit-signup'>Didn't have any account? <span>Sign Up here</span></div>
            </div>
        </div>
    )
}

export default LoginSignUp