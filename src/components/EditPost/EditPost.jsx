import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import './EditPost.css';

export default function EditPost(props) {

    const {data} = props;
    const history = useHistory();

    const [text, SetText] = useState('');

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    const onPublishHandler = () => {
        const d = {
            id: data.id,
            content: text
        }
        try {
            fetch(process.env.REACT_APP_POSTS_URL, {
                method: 'POST',
                body: JSON.stringify(d)
            })
            .then(resp => console.log(resp));
        }
        catch (e) {
            console.log(e);
        }
      
    }

    const TextInputHandler = (e) => {
        SetText(e.target.value);
    }

    const onDelHandler = (e) => {
        const fetchData = async() => {
            try {
                const resp = await  fetch(`${process.env.REACT_APP_POSTS_URL}/${data.id}`, {
                             method: 'DELETE',
                         });
                if(!resp.ok)
                {
                    console.log(resp)
                }
                history.push('/');
            }
            catch (e) {
             console.log(e)
            }
        }
        fetchData();
    }

    useEffect(()=>{
        SetText(data.content);
    },[])

    return (
        <form className="PostEditForm" onSubmit={onSubmitHandler}>
        <Link to="/" className="CloseFormBtn">✖</Link>
        <textarea className="TextArea" value={text} onChange={TextInputHandler}></textarea>
        <Link to="/" className="PublishBtn" onClick={onPublishHandler}>Изменить</Link>
        <button  className="DeleteBtn" onClick={onDelHandler}>Удалить</button>
    </form>
    )
}