import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './posts.css'

const Posts = () => {
    const [postsDetail, setPostDetail] = useState([
        {
            commentCount: '7',
            answerCount: '4',
            viewCount: '112',
            title: 'This is title of topic',
            content: 'This is content of topic',
            tags: ['ReactJS', 'NodeJS'],
            userAvatar: 'https://i.pinimg.com/236x/8a/7e/40/8a7e400fa9ecbcf3a8893863bd4d13e5--manga-art-anime-manga.jpg',
            askTime: '4 days ago',
            userName: 'User Name'
        },
        {
            commentCount: '7',
            answerCount: '4',
            viewCount: '112',
            title: 'This is title of topic',
            content: 'This is content of topic This is content of topicThis is content of topicThis is content of topicThis is content of topicThis is content of topicThis is content of topicThis is content of topicThis is content of topicThis is content of topicThis is content of topicThis is content of topicThis is content of topicThis is content of topicThis is content of topicThis is content of topicThis is content of topic',
            tags: ['ReactJS', 'NodeJS', 'MongoDB'],
            userAvatar: 'https://i.pinimg.com/236x/8a/7e/40/8a7e400fa9ecbcf3a8893863bd4d13e5--manga-art-anime-manga.jpg',
            askTime: '3 days ago',
            userName: 'User Name'
        },
        {
            commentCount: '7',
            answerCount: '4',
            viewCount: '112',
            title: 'This is title of topic',
            content: 'This is content of topic',
            tags: ['ReactJS', 'NodeJS'],
            userAvatar: 'https://i.pinimg.com/236x/8a/7e/40/8a7e400fa9ecbcf3a8893863bd4d13e5--manga-art-anime-manga.jpg',
            askTime: '4 days ago',
            userName: 'User Name'
        },

    ])

    return (
        <div className="posts-container">
            <div class="container">
                <div class="row">
                    <div className="posts-container__header">
                        <p className="posts-container__header-text">Top Questions</p>
                        <Link to='/ask-question'><button type="button" className="btn btn-primary ask_button">Ask Question</button></Link>
                    </div>
                </div>
            </div>

            {
                postsDetail.map((postDetail, index) => {
                    return (
                            <Link to='/topic-page' className="post-item">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-2">
                                            <div className="post-item-detail">
                                                <div className="comments">
                                                    <p className="comment-count">{postDetail.commentCount}</p>
                                                    <p>Comments</p>
                                                </div>

                                                <div className="answers have-answers">
                                                    <p className="answer-count">{postDetail.answerCount}</p>
                                                    <p>Answers</p>
                                                </div>

                                                <div className="tags">
                                                    <p className="tag-count">{postDetail.tags.length}</p>
                                                    <p>Tags</p>
                                                </div>

                                                <div className="views">
                                                    <p className="view-count">{postDetail.viewCount} views</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-10">
                                            <div className="post-item-body">
                                                <div className="post-item-title">
                                                    <h4>{postDetail.title}</h4>
                                                </div>

                                                <div className="post-item-content">
                                                    <p>{postDetail.content} </p>
                                                </div>

                                                <div className="post-item-tags">
                                                    {
                                                        postDetail.tags.map((tag, index) => {
                                                            return (
                                                                <a href="#">{tag}</a>
                                                            )
                                                        })
                                                    }
                                                </div>

                                                <div className="post-item-user">
                                                    <p>{postDetail.askTime}</p>
                                                    <div className="user-detail">
                                                        <img src={postDetail.userAvatar}></img>
                                                        <span>{postDetail.userName}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                    )
                })
            }
        </div>


    )
}

export default Posts;