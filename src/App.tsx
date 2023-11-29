import './App.css';
import { Header } from './header/Header';
import { Profile } from './profile/Profile';
import { Menu } from './menu/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import { Communication} from './messages/Communication';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path='/profile' component={Profile}></Route>
        <Route path='/messages' component={Communication}></Route>
      
        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
