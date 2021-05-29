import React from 'react';
import Header from '../components/Header/Header'
import NavLinkSideBar from '../components/NavLinkSideBar/NavLinkSideBar'
import PostTextArea from '../components/PostTextArea/PostTextArea'

const NewPost = () => {
    return (
        <div className="container">
            <Header />
            <div class="row">
                <div class="col-2">
                    <NavLinkSideBar />
                </div>

                <div class="col-10">
                    <PostTextArea />
                </div>
            </div>
        </div>
    )
}

export default NewPost;