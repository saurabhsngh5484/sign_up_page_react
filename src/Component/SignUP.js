
import React, { useState } from 'react'
import bgImage from './03.png'
import PasswordIcon from './PasswordIcon'
import googleIcon from './google.png'
import facebookIcon from './facebook.png'


const SignUP = () => {
    let [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    const handalClick = () => {
        if (!user.name || !user.email || !user.password || !user.confirmPassword) {
            setError('All fields are mandatory');
            return;
        }

        if (user.password !== user.confirmPassword) {
            setError('Error: Please Make sure your passwords and confirm passwords match!');
            return;
        }
        else {
            setSuccess('Successful Signed Up!');

        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }

    return (
        <div>
            <div className='container'>
                <div className='left'>
                    <h3>Find 3D Objects, Mockups <br />
                        and Ilustration here
                    </h3>

                    <img src={bgImage} alt='bg' className='bg-image' />
                </div>
                <div className='right'>
                    <h1 className='heading'>Create Account</h1>
                    <div className='icon'>
                        <div className='google'>
                            <img src={googleIcon} className='social-icon' alt="Google Icon " />
                            <p>sign up with google</p>
                        </div>
                        <div className='facebook'>
                            <img src={facebookIcon}  className='social-icon' alt='facebook icon'/>
                            <p>sign up with facebook</p>
                        </div>
                    </div>

                    <div className='heads'>
                        <h3>--or--</h3>
                    </div>
                    <div className='input-box'>
                        <label >Full Name</label><br />
                        <input type="text" name="name" value={user.name} onChange={handleChange} /><br /><br />

                        <label >Email</label><br />
                        <input type="email" name="email" value={user.email} onChange={handleChange} /><br /><br />

                        <label >Password</label><br />
                        <div className='password-icon-wrap'>
                            <input type="password" name="password" value={user.password} onChange={handleChange} /><br /><br />
                            <PasswordIcon />
                        </div>


                        <label > Confirm Password</label><br />

                        <div className='password-icon-wrap'>
                            <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} /><br />
                            <PasswordIcon />
                        </div>

                    </div>
                    {
                        error &&
                        <div className="error">{error}</div>
                    }
                    {
                        success &&
                        <div className="success">{success}</div>
                    }
                    <div className="btn">
                        <button onClick={handalClick}>Create Account</button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SignUP