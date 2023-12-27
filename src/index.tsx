import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './state/store';



const rerenderEntireTree = ()=> {
  ReactDOM.render(
    <App state={store.getState()} updateNewPostText={store.dispatch.bind(store)} addPost = {store.dispatch.bind(store)} />,
  document.getElementById('root')
)
}
rerenderEntireTree();
store.subscribe (rerenderEntireTree)