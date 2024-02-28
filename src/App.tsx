import './App.css';
import { Header } from './components/header/Header';
import { Profile } from './profile/Profile';
import { Menu } from './components/header/menu/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import { Communication} from './messages/Communication';
import { ActionType, StateType, StoreType } from './redux/store';
import { Users } from './users/Users';
import UsersContainer from './users/UsersContainer';

// type AppPropsType = {store: any }

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path='/profile' render={()=> <Profile />}></Route>
        <Route path='/messages' render={()=> <Communication />}></Route> 
        <Route path='/users' render={()=> <UsersContainer />}></Route>
        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
