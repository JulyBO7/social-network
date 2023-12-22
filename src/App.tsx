import './App.css';
import { Header } from './header/Header';
import { Profile } from './profile/Profile';
import { Menu } from './menu/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import { Communication} from './messages/Communication';
import { StateType } from './state/state';

type AppPropsType = {
  state: StateType
}

const App: React.FC <AppPropsType> = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path='/profile' render={()=> <Profile profilePage={props.state.profilePage}/>}></Route>
        <Route path='/messages' render={()=> <Communication state={props.state.dialogsPage} />}></Route>
        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
