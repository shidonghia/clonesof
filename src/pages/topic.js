import React from 'react';
import Header from '../components/Header/Header'
import NavLinkSideBar from '../components/NavLinkSideBar/NavLinkSideBar'
import Topic from '../components/Topic/Topic';

const TopicPage = () => {
    return (
        <div class="topic-page">
            <Header />
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <NavLinkSideBar />
                    </div>

                    <div class="col-10">
                        <Topic />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopicPage;