import React, { useState, useEffect } from 'react';
import './UserProfile.css';

const UserProfile = () => {
    const [userPost, setUserPost] = useState([
        {
            title: 'Hello',
            content: ' Success  Success  Success  Success  Success  Success  Success  Success  Success  Success  Success  Success  Success  Success  Success  Success ',
            userImage: 'https://i.pinimg.com/236x/8a/7e/40/8a7e400fa9ecbcf3a8893863bd4d13e5--manga-art-anime-manga.jpg',
            postTime: '4 days ago'
        },
        {
            title: 'Hello HelloHelloHelloHelloHelloHello Hello Hello Hello Hello',
            content: ' Success  Success  Success  Success  Success ',
            userImage: 'https://i.pinimg.com/236x/8a/7e/40/8a7e400fa9ecbcf3a8893863bd4d13e5--manga-art-anime-manga.jpg',
            postTime: '25/05/2021 4:31pm'
        },
        {
            title: 'Hello Hello Hello',
            content: ' Success  Success  Success  Success  Success  Success  Success  Success  Success  Success  Success  Success  Success  Success  Success  Success ',
            userImage: 'https://i.pinimg.com/236x/8a/7e/40/8a7e400fa9ecbcf3a8893863bd4d13e5--manga-art-anime-manga.jpg',
            postTime: '3 minutes ago'
        },
    ])

    const [userInfo, setUserInfo] = useState({
        username: 'User Name',
        name: 'Đào Đình Nghĩa',
        location: 'Việt Nam',
        university: 'University of Engineering and Technology'
    })

    const clickProfile = () => {
        var userManagePost = document.getElementById('user-manage__post');
        var userInfoDetail = document.getElementById('user-info-detail');
        var userProfileBtn = document.getElementById('user-manage-profile-btn');
        var userPostBtn = document.getElementById('user-manage-post-btn');
        userPostBtn.classList.remove('user-manage__nav-link--active');
        userProfileBtn.classList.add('user-manage__nav-link--active');
        userManagePost.style.display = 'none';
        userInfoDetail.style.display = 'block';
    }

    const clickPost = () => {
        var userManagePost = document.getElementById('user-manage__post');
        var userInfoDetail = document.getElementById('user-info-detail');
        var userProfileBtn = document.getElementById('user-manage-profile-btn');
        var userPostBtn = document.getElementById('user-manage-post-btn');
        userProfileBtn.classList.remove('user-manage__nav-link--active');
        userPostBtn.classList.add('user-manage__nav-link--active');
        userInfoDetail.style.display = 'none';
        userManagePost.style.display = 'block';
    }

    const previewFile = () => {
        const preview = document.getElementById("user-profile__avatar");
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();


        reader.addEventListener("load", function () {
            // convert image file to base64 string
            console.log(reader.result)
            preview.src = reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    const uploadAvatar = () => {
        document.getElementById('myFile').click()
    }       
    
    const handleOnchange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setUserInfo((prevState) => (
            {...prevState, [name]:value}
        ))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(userInfo.name +  userInfo.location + userInfo.university)
    }


    return (
        <div className="user-manage">
            <div className="user-manage__nav-link">
                <div class="container">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="navbar-nav">
                            <a id='user-manage-profile-btn' class="nav-item nav-link user-manage__nav-link-btn user-manage__nav-link--active" onClick={clickProfile} href="#">Profile</a>
                            <a id='user-manage-post-btn' class="nav-item nav-link user-manage__nav-link-btn" onClick={clickPost} href="#">Post</a>
                        </div>
                    </nav>
                </div>

            </div>

            <div id="user-info-detail" className="user-info-detail">
                <div className="user-profile">
                    <div class="container">
                        <h3>Profile</h3>
                        <div class="row">
                            <div class="col-4">
                                <img id="user-profile__avatar" className="user-profile__avatar" src="https://i.pinimg.com/236x/8a/7e/40/8a7e400fa9ecbcf3a8893863bd4d13e5--manga-art-anime-manga.jpg"></img>
                                <input type="file" id="myFile" name="filename" hidden onChange={previewFile} />
                                <button className="btn btn-primary simulate-upload-input" onClick={uploadAvatar}>Upload File</button>
                            </div>

                            <div class="col-8">
                                <div className="user-profile__user-name">{userInfo.username}</div>
                                <form onSubmit={handleSubmit}>
                                    <div className="user-profile__name">
                                        <p>Name: </p>
                                        <input type="text" name="name" defaultValue={userInfo.name} onChange={(e) => handleOnchange(e)}></input>
                                    </div>
                                    <div className="user-profile__location">
                                        <p>Location:</p>
                                        <input type="text" name="location" defaultValue={userInfo.location} onChange={(e) => handleOnchange(e)}></input>
                                    </div>
                                    <div className="user-profile__university">
                                        <p>University: </p>
                                        <input type="text" name="university" defaultValue={userInfo.university} onChange={(e) => handleOnchange(e)}></input>
                                    </div>
                                    <button type="submit" className="btn btn-primary user-profile__change-info">Change Infomation</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="user-activity">
                    <h3>Activity</h3>
                    <div class="container">
                        <div class="row">
                            <a className="user-activity__notification">This notification for user activity This notification for user activityThis notification for user activityThis notification for user activityThis notification for user activityThis notification for user activityThis notification for user activityThis notification for user activityThis notification for user activityThis notification for user activityThis notification for user activityThis notification for user activityThis notification for user activityThis notification for user activityThis notification for user activityThis notification for user activity</a>
                            <a className="user-activity__notification">This notification for user activity</a>
                            <a className="user-activity__notification">This notification for user activity</a>
                            <a className="user-activity__notification">This notification for user activity</a>
                            <a className="user-activity__notification">This notification for user activity</a>
                            <a className="user-activity__notification">This notification for user activity</a>
                            <a className="user-activity__notification">This notification for user activity</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="user-manage__post" className="user-manage__post">
                <div class="container">
                    {
                        userPost.map((post, index) => {
                            return (
                                <a className="user-manage__post-detail" key={index}>
                                    <div class="row">
                                        <div class="col-3">
                                            <img className="user-manage__post-user-avatar" alt="User Image" src={post.userImage}></img>
                                        </div>
                                        <div class="col-9">
                                            <h3 className="user-manage__post-header">{post.title}</h3>
                                            <p className="user-manage__post-content">{post.content}</p>
                                            <p className="user-manage__post-time">{post.postTime}</p>
                                        </div>
                                    </div>
                                </a>
                            )

                        })
                    }
                </div>
            </div>
        </div>


    )
}

export default UserProfile;