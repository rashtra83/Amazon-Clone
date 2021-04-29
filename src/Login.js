
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './Firebase';
import "./Login.css"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const changeEmail = (event) => {
        setEmail(event.target.value);
    }
    const changePassword = (event) => {
        setPassword(event.target.value);
    }
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className="login">
            <Link to="./">
                <img
                    src="http://pngimg.com/uploads/amazon/amazon_PNG8.png"
                    alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={changeEmail}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={changePassword}
                    />
                    <button type="submit" className="login__signinButton" onClick={signIn}>Sign In</button>

                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <button className="login__registerButton" onClick={register}>Create an account</button>
            </div>
        </div>
    )
}

export default Login
