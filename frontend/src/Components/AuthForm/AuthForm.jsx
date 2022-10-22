import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { login, signUp } from "../../Actions/AuthAction.js";

import './AuthForm.css'

const AuthForm = () => {

    const dispatch = useDispatch();

  const loading = useSelector((state) => state.authReducer.loading)

  const initialState = {
    email: "",
    username: "",
    passwd: "",
    confirmpass: "",
  };
  const [isSignUp, setIsSignUp] = useState(false)

  const [data, setData] = useState(initialState)

  const [confirmpass, setConfirmpass] = useState(true)

  const handleChange = (event) => {
    setData({...data, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if(isSignUp) {
      data.passwd===data.confirmpass ? dispatch(signUp(data)) : setConfirmpass(false)
    } else {
      dispatch(login(data))
    }
  }

  const resetForm = () => {
    setData(initialState);
    setConfirmpass(confirmpass);
  }

    return (
        <div className="AuthForm">
            <form className='Form' onSubmit={handleSubmit}>
                {isSignUp? (
                    <h2>Create an account</h2>
                ) : (
                    <>
                    <h2>Welcome back!</h2>
                    <h4>We're so excited to see you again!</h4>
                    </>
                )}
                
                {isSignUp? (<>
                <label htmlFor="email">Email</label>
                <input 
                    required
                    type="text" 
                    name="email" 
                    value={data.email} 
                    onChange={handleChange}
                />
                </>
                ) : ""}
                
                <label htmlFor="username">Username</label>
                <input
                    required
                    type="text" 
                    name="username" 
                    value={data.username} 
                    onChange={handleChange} 
                />
                
                <label htmlFor="passwd">Password</label>
                <input
                    required
                    type="password" 
                    name="passwd" 
                    value={data.passwd} 
                    onChange={handleChange} 
                />
                
                {isSignUp? (<>
                <label htmlFor="confirmpass">Confirm Password</label>
                <input
                    required
                    type="password" 
                    name="confirmpass" 
                    value={data.confirmpass} 
                    onChange={handleChange}
                />
                </>
                ) : ""}

                <span style={{display: confirmpass? "none" : "block", color: "red", fontSize: "12px", alignSelf: "flex-end", marginRight: "5px"}}>
                * Passwords dont match
                </span>

                <button type="submit"disabled={loading}>{loading ? "Loading..." : isSignUp ? "SignUp" : "Log In"}</button>
                <div onClick={() => {setIsSignUp((prev) => !prev); resetForm()}}>{isSignUp? "Already have an account?" : "Need an account?"}</div>
            </form>
        </div>
    )
}

export default AuthForm