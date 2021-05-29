import React from 'react';
import './Header.css';

const Header = () => {
    const logoImgStyle = {
        width: '160px',
        objectFit: 'contain',
        position: 'relative',
        top: '-4px'
    }

    const searchBarStyle = {
        width: '440px',
    }

    const clickItemHeader = (e) => {
        e.preventDefault();
        e.stopPropagation();
        var navLinkSideBarEle = document.querySelectorAll('.header-nav-link');
        navLinkSideBarEle.forEach(function(curEle, index){
            curEle.classList.remove('active');
        })
        e.target.classList.add('active');
    }

    const loginAction = () => {
        var statusNotLogin = document.getElementById('not-login');
        var statusLogin = document.getElementById('had-login');
        statusNotLogin.style.display = 'none';
        statusLogin.style.display = 'flex';
    }

    const logoutAction = () => {
        var statusNotLogin = document.getElementById('not-login');
        var statusLogin = document.getElementById('had-login');
        statusNotLogin.style.display = 'inline-block';
        statusLogin.style.display = 'none';
    }

    return (
        <div className="container" style={{ marginBottom: '64px' }}>
            <div className="row">
                <div className="col-12">
                    <div style={{ position: 'fixed', zIndex: '3' }}>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand" href="#">
                                <img src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.png" style={logoImgStyle}></img>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-5">
                                    <li className="nav-item" onClick={(e) => clickItemHeader(e)}>
                                        <a className="nav-link header-nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item" onClick={(e) => clickItemHeader(e)}> 
                                        <a className="nav-link header-nav-link" href="#">Topic</a>
                                    </li>
                                    <li className="nav-item" onClick={(e) => clickItemHeader(e)}>
                                        <a className="nav-link header-nav-link" href="#">Tag</a>
                                    </li>
                                </ul>

                                <form className="form-inline my-2 my-lg-0" >
                                    <input className="form-control mr-sm-2" type="search" style={searchBarStyle} placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0 mr-4" type="submit">Search</button>
                                </form>

                                {/* Status Not Login */}
                                <div id="not-login">
                                    <button type="button" className="btn btn-primary mr-1" id="log-in-btn" onClick={() => loginAction()}>Log in</button>
                                    <button type="button" className="btn btn-secondary">Sign up</button>
                                </div>

                                {/* Status Login */}
                                <div id="had-login">
                                    <div className="had-login-user">
                                        <img className="had-login-user-avatar" src="https://i.pinimg.com/236x/8a/7e/40/8a7e400fa9ecbcf3a8893863bd4d13e5--manga-art-anime-manga.jpg"></img>
                                        <span className="had-login-user-name">User Name</span>
                                    </div>
                                    <button type="button" className="btn btn-secondary" id="log-out-btn" onClick={() => logoutAction()}>Log out</button>
                                </div>

                            </div>
                        </nav>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default Header;