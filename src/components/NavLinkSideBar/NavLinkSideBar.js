import React from 'react';
import './NavLinkSideBar.css'
import { Link } from 'react-router-dom'

const NavLinkSideBar = () => {  
    const clickItem = (e) => {
        
        var navLinkSideBarEle = document.querySelectorAll('.side-bar-link');
        navLinkSideBarEle.forEach(function(curEle, index){
            curEle.classList.remove('side-bar-link--active');
        })
        e.target.classList.add('side-bar-link--active');
    }
    return (
        <div className="nav-link-side-bar">
            <ul class="list-group">
                <li class="list-group-item" ><Link to='/' className="side-bar-link side-bar-link--active" onClick={(e) => clickItem(e)}>Home</Link></li>
                <li class="list-group-item" >
                    <a className="side-bar-link" onClick={(e) => clickItem(e)}>Public</a>
                    <ul class="list-group">
                        <li class="list-group-item"><Link to="/user" className="side-bar-link" onClick={(e) => clickItem(e)}>Users</Link></li>
                        <li class="list-group-item"><a className="side-bar-link" onClick={(e) => clickItem(e)}>Topic</a></li>
                        <li class="list-group-item"><a className="side-bar-link" onClick={(e) => clickItem(e)}>Tag</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    
    )
}

export default NavLinkSideBar;