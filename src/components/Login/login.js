import React from 'react';
import './login.css'

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
                                <button type="submit">
                                    LOGIN
                                    </button>
                                <div class="link-signup">
                                    <span>Don't have an account ? </span>
                                    <a className="link-singup-btn" href="">Sign up</a>
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