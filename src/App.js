import { useEffect, useState } from 'react';
import {BrowserRouter as Router ,NavLink,Route, Switch} from 'react-router-dom';
import CreateNewPost from './components/CreateNewPost/CreateNewPost';
import Posts from './components/Posts/Posts';
import EditPost from './components/EditPost/EditPost';
import './App.css';

function App() {

  const [edit, setEdit] = useState({});
  const params = (id,content) => {
    setEdit({
      id: id,
      content: content
    })
  }

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/posts/new" component={CreateNewPost}></Route>
        <Route path="/posts/:id" component={() => <EditPost data={edit}/>}></Route>
        <Route path="/" component={() => <Posts sendParams={params}/>}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
