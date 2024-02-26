import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux/store-redux';
import { Provider } from 'react-redux';



const rerenderEntireTree = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App store={store} />
    </Provider>,
    document.getElementById('root')
  )
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree)

