import React from 'react';
import './signup.css'

const SignUp = () => {
    return (
        <div id="signup-action" className="signup-action">
            <div class="container">
                <div class="row">
                    <div class="register-form">
                        <form action="" method="post">
                            <h1>Sign up</h1>
                            <div class="input-box">
                                <div class="text-signup">Usename</div>
                                <input type="text" placeholder="Enter username" />
                            </div>
                            <div class="input-box">
                                <div class="text-signup">Password</div>
                                <input type="password" placeholder="Enter password" />
                            </div>
                            <div class="input-box">
                                <div class="text-signup">Re-enter password</div>
                                <input type="password" placeholder="Re-enter password" />
                            </div>
                            <div class="btn-box">
                                <button type="submit">
                                    SIGN UP
                            </button>
                                <div class="link-login">
                                    <span>Already have an account ? </span>
                                    <a href=""> Log in</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SignUp;