import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './PostTextArea.css'

const NewPost = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    useEffect(() => {
        console.log(editorState);
    }, [editorState]);

    const [hasFocus, focusStatus] = useState('hasBlur');
    return (
        <form method="post" className="post-text-area">
            <h4>Title</h4>
            <input id="post-text-area__title" className="post-text-area__title" type="text" placeholder="Enter title of question"></input>
            <h4>Body</h4>
            <div id="post-text-area__content" className='post-text-area__content' style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                    onFocus={() => focusStatus('hasFocus')}
                    onBlur={() => focusStatus('hasBlur')}
                    editorClassName = {hasFocus}
                />
            </div>
            <h4>Tags</h4>
            <input id="post-text-area__tags" className='post-text-area__tags' type="text" placeholder="Enter tags of questions, eg: reactjs nodejs mysql"></input>

            <button id="post-text-area__sunmit-btn" type="button" class="btn btn-primary post-text-area__sunmit-btn">Post your question</button>
        </form>
    );
}

export default NewPost;