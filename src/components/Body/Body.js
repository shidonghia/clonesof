import React from 'react';
import NavLinkSideBar from '../NavLinkSideBar/NavLinkSideBar';
import Posts from '../PostsContainer/Posts'

const Body = () => {
    return (
        <div className="container">
            <div class="row">
                <Posts />
            </div>
        </div>
    )
}

export default Body;