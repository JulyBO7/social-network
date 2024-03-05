import './App.css';
import { Header } from './components/header/Header';
import { Profile } from './components/profile/Profile';
import { Menu } from './components/menu/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import { Communication} from './messages/Communication';
import UsersContainer from './components/users/UsersContainer';

// type AppPropsType = {store: any }

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path='/profile/:userId?' render={()=> <Profile />}></Route>
        <Route path='/messages' render={()=> <Communication />}></Route> 
        <Route path='/users' render={()=> <UsersContainer />}></Route>
        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
