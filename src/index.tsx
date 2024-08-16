import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux/store-redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

  , document.getElementById('root')
)

// rerenderEntireTree();
// store.subscribe(rerenderEntireTree)

