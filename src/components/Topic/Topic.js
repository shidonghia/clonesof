import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './Topic.css';

const Topic = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    useEffect(() => {
        console.log(editorState);
    }, [editorState]);

    const [hasFocus, focusStatus] = useState('hasBlur');

    return (
        <div className='topic-container'>
            <div class="container">
                <div class="row">
                    <div className='topic-header'>
                        <div className='topic-header__detail'>
                            <h3 className='topic-header__detail-title'>This is title of topic</h3>
                            <span className='topic-header__detail-time-asked'>Asked 4 days ago</span>
                            <span className='topic-header__detail-view'>Viewed 16 times</span>
                        </div>
                        <Link to='/ask-question'>
                            <button className='btn btn-primary topic-header-ask-question-btn'>
                                Ask question
                            </button>
                        </Link>
                    </div>
                </div>

                <div className='topic-content'>
                    <div class="container">
                        <div class="row">
                            <div class="col-1">
                                <div className='topic-content__sidebar'>
                                    <i class="fas fa-sort-up topic-content__sidebar-icon--up-down"></i>
                                    <span className='topic-content__sidebar-vote-count'>0</span>
                                    <i class="fas fa-sort-down topic-content__sidebar-icon--up-down"></i>
                                    <i class="fas fa-bookmark topic-content__sidebar-icon"></i>
                                    <i class="fas fa-share topic-content__sidebar-icon"></i>
                                </div>
                            </div>

                            <div class="col-11">
                                <div className='topic-content__topic'>
                                    <p className='topic-content__topic-content'>This is content of topic This is content of topic This is content of topic This is content of topic
                                    This is content of topic This is content of topic
                                    This is content of topic This is content of topic
                                    This is content of topic This is content of topic
                                    This is content of topic This is content of topic
                                    This is content of topic This is content of topicThis is content of topic This is content of topicThis is content of topic This is content of topicThis is content of topic This is content of topic
                                    This is content of topic This is content of topic
                                    This is content of topic This is content of topic
                                    This is content of topic This is content of topic


                                    This is content of topic This is content of topicThis is content of topic This is content of topic
                                    This is content of topic This is content of topic
                                    </p>

                                    <div className="topic-user">
                                        <img className="topic-user-img" src="https://i.pinimg.com/236x/8a/7e/40/8a7e400fa9ecbcf3a8893863bd4d13e5--manga-art-anime-manga.jpg"></img>
                                        <span className="topic-user-name">User Name</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='topic-answer'>
                    <h5 className="topic-answer-count">1 Answers</h5>
                    <div class="container">
                        <div class="row">
                            <div class="col-1">
                                <div className='topic-content__sidebar'>
                                    <i class="fas fa-sort-up topic-content__sidebar-icon--up-down"></i>
                                    <span className='topic-content__sidebar-vote-count'>0</span>
                                    <i class="fas fa-sort-down topic-content__sidebar-icon--up-down"></i>
                                </div>
                            </div>

                            <div class="col-11">
                                <p className="topic-answer-content">
                                    Hi, This is anwer for topic Hi, This is anwer for topic Hi, This is anwer for topic Hi, This is anwer for topic Hi, This is anwer for topic
                                    Hi, This is anwer for topic Hi, This is anwer for topic
                                    Hi, This is anwer for topic
                                    Hi, This is anwer for topic Hi, This is anwer for topic
                                    Hi, This is anwer for topic Hi, This is anwer for topic
                                    Hi, This is anwer for topic
                                    Hi, This is anwer for topic  Hi, This is anwer for topic
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="topic-user">
                        <img className="topic-user-img" src="https://i.pinimg.com/236x/8a/7e/40/8a7e400fa9ecbcf3a8893863bd4d13e5--manga-art-anime-manga.jpg"></img>
                        <span className="topic-user-name">User Name</span>
                    </div>
                </div>

                <div className='topic-answer-text'>
                    <h5 className="topic-answer-text-title">Your answer</h5>
                    <form>
                        <div id="post-text-area__content" className='post-text-area__content' style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
                            <Editor
                                editorState={editorState}
                                onEditorStateChange={setEditorState}
                                onFocus={() => focusStatus('hasFocus')}
                                onBlur={() => focusStatus('hasBlur')}
                                editorClassName={hasFocus}
                            />
                        </div>
                        <button className="btn btn-primary">Post your answer</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Topic;