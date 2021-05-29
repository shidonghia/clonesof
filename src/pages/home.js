import React from 'react';
import Header from '../components/Header/Header'
import NavLinkSideBar from '../components/NavLinkSideBar/NavLinkSideBar'
import Body from '../components/Body/Body'

const HomePage = () => {
    return (
        <div className="container">
            <Header />
            <div class="row">
                <div class="col-2">
                    <NavLinkSideBar />
                </div>

                <div class="col-10">
                    <Body />
                </div>
            </div>
        </div>
    )
}

export default HomePage;