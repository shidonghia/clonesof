import React from 'react';
import './login.css';
import { Link } from 'react-router-dom'

const Login = () => {
    return (

        <div id="login-action" className="login-action">
            <div class="container">
                <div class="row">
                    <div id="login-form" class="login-form">
                        <form action="" method="post">
                            <h1>Login</h1>
                            <div class="input-box">
                                <div class="text-form">Usename</div>
                                <input type="text" placeholder="Enter username" />
                            </div>
                            <div class="input-box">
                                <div class="text-form">Password</div>
                                <input type="password" placeholder="Enter password" />
                            </div>
                            <div class="btn-box">
                                <Link to='/'>
                                    <button type="submit">
                                        LOGIN
                                    </button>
                                </Link>

                                <div class="link-signup">
                                    <span>Don't have an account ? </span>
                                    <Link className="link-singup-btn" to='/sign-up'>Sign up</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login;