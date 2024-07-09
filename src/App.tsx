import './App.css';
import { Header } from './components/header/Header';
import { Profile } from './components/profile/Profile';
import { Menu } from './components/menu/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Communication from './components/messages/Communication';
import UsersContainer from './components/users/UsersContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';

// type AppPropsType = {store: any }

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <Route path={'/'}>
          <Route path='/profile/:userId?' render={() => <Profile />}></Route>
          <Route path='/messages' render={() => <Communication />}></Route>
          <Route path='/users' render={() => <UsersContainer />}></Route>
          <Route path='/login' render={() => < Login />}></Route>
        </Route>

        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
