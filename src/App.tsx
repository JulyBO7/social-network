import './App.css';
import { Header } from './header/Header';
import { Profile } from './profile/Profile';
import { Menu } from './menu/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import { Communication} from './messages/Communication';
import { ActionType, StateType, StoreType } from './redux/store';

type AppPropsType = {
  store: any
  // state: StateType
  // dispatch: (action: ActionType)=> void
}

const App: React.FC <AppPropsType> = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path='/profile' render={()=> <Profile store={props.store}/>}></Route>
        <Route path='/messages' render={()=> <Communication store={props.store}/>}></Route>
        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
