import React from 'react';
import UserProfile from '../components/UserProfile/UserProfile';
import Header from '../components/Header/Header'
import NavLinkSideBar from '../components/NavLinkSideBar/NavLinkSideBar'

const User = () => {
    return (
        <div class="user-page">
            <Header />
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <NavLinkSideBar />
                    </div>

                    <div class="col-10">
                        <UserProfile />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;