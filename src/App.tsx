import './App.css';
import { Header } from './header/Header';
import { Profile } from './profile/Profile';
import { Menu } from './menu/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import { Communication} from './messages/Communication';
import { AddPostAction, StateType, UpdateNewPostAction } from './state/store';

type AppPropsType = {
  state: StateType
  updateNewPostText: (action: UpdateNewPostAction)=> void
  addPost: (action: AddPostAction)=> void
}

const App: React.FC <AppPropsType> = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path='/profile' render={()=> <Profile  profilePage={props.state.profilePage} 
                                                      updateNewPostText={props.updateNewPostText}
                                                      addPost = {props.addPost} />}></Route>
        <Route path='/messages' render={()=> <Communication state={props.state.dialogsPage} />}></Route>
        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
