import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux/store-redux';
import { StoreContext } from './context/StoreContext';



const rerenderEntireTree = () => {
  ReactDOM.render(
    <StoreContext.Provider value={store}>
      <App store={store} />
    </StoreContext.Provider>,
    document.getElementById('root')
  )
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree)

