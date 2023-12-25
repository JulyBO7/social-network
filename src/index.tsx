import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { addPost, subscriber } from './state/state'
import { updateNewPostText } from './state/state';



const rerenderEntireTree = ()=> {
  ReactDOM.render(
    <App state={state} updateNewPostText={updateNewPostText} addPost = {addPost} />,
  document.getElementById('root')
)
}
rerenderEntireTree();
subscriber(rerenderEntireTree)