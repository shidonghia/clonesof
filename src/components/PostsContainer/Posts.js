import React from 'react';
import './posts.css'

const Posts = () => {
    return (
        <div className="posts-container">
            <div className="posts-container__header">
                <p>Top Questions</p>
                <button type="button" className="btn btn-primary ask_button">Ask Question</button>
            </div>

            <div className="post-item">
                <div class="container">
                    <div class="row">
                        <div class="col-2">
                            <div className="post-item-detail">
                                <div className="comments">
                                    <p className="comment-count">1</p>
                                    <p>Comments</p>
                                </div>

                                <div className="answers have-answers">
                                    <p className="answer-count">1</p>
                                    <p>Answers</p>
                                </div>

                                <div className="tags">
                                    <p className="tag-count">3</p>
                                    <p>Tags</p>
                                </div>

                                <div className="views">
                                    <p className="view-count">16 views</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-10">
                            <div className="post-item-body">
                                <div className="post-item-title">
                                    <h4>This is title topic</h4>
                                </div>

                                <div className="post-item-content">
                                    <p> This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic  This is content of topic </p>
                                </div>

                                <div className="post-item-tags">
                                    <a href="#">ReactJS</a>
                                    <a href="#">Nodejs</a>
                                </div>

                                <div className="post-item-user">
                                    <p>Asked 4 minutes ago</p>
                                    <div className="user-detail">
                                        <img src="https://i.pinimg.com/236x/8a/7e/40/8a7e400fa9ecbcf3a8893863bd4d13e5--manga-art-anime-manga.jpg"></img>
                                        <span>User name</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts;