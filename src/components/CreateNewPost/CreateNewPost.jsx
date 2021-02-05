import { useState } from "react";
import { NavLink } from "react-router-dom";
import './CreateNewPost.css';

export default function CreateNewPost() {

    const [text, SetText] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    const onPublishHandler = () => {
        const data = {
            id: 0,
            content: text
        }
        fetch(process.env.REACT_APP_POSTS_URL, {
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(resp => console.log(resp));
    }

    const TextInputHandler = (e) => {
        SetText(e.target.value);
    }

    return (
        <form className="PostCreationForm" onSubmit={onSubmitHandler}>
            <NavLink to="/" className="CloseFormBtn">✖</NavLink>
            <textarea className="TextArea" value={text} onChange={TextInputHandler}></textarea>
            <NavLink to="/" className="PublishBtn" onClick={onPublishHandler}>Опубликовать</NavLink>
        </form>
    )
}