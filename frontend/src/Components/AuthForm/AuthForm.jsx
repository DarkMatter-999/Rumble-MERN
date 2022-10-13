import React, { useState } from 'react'

import './AuthForm.css'

const AuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(false)

  return (
    <div className="AuthForm">
        <div className='Form'>
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
            <input type="text" name="email" />
            </>
            ) : ""}
            
            <label htmlFor="username">Username</label>
            <input type="text" name="username" />
            
            <label htmlFor="passwd">Password</label>
            <input type="password" name="password" />
            
            {isSignUp? (<>
            <label htmlFor="confirmpasswd">Confirm Password</label>
            <input type="password" name="confirmpasswd" />
            </>
            ) : ""}

            <button type="submit">{isSignUp? "Continue" : "Log In"}</button>
            <div onClick={() => {setIsSignUp((prev) => !prev)}}>{isSignUp? "Already have an account?" : "Need an account?"}</div>
        </div>
    </div>
  )
}

export default AuthForm