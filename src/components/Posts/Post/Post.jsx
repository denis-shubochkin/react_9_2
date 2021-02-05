
import {BrowserRouter as Router ,Link, Route, Switch} from 'react-router-dom';
import cat from '../../../cat.jpg';
import './Post.css';

export default function Post(props) {
    const {data, sendParams} = props;
    const link = `/posts/${data.id}`;
    const ClickHandler = () => {
        sendParams(data.id, data.content);
    }
    return (
        <Link to={link} onClick={ClickHandler}>
            <div className="Post">
            <div className="PostHeader">
                <img className="Photo" src={cat} alt="cat"></img>
                <div className="NameTimeBlock">
                    <div className="Name">Denis</div>
                    <div className="Time">{data.created}</div>
                </div>
            </div>
            <div className="PostContent">{data.content}</div>
            </div>
        </Link>
    )
}