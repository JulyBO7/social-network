import './App.css';
import { Header } from './header/Header';
import { Profile } from './profile/Profile';
import { Menu } from './menu/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import { Communication} from './messages/Communication';
import { DialogsType, MessagesType, PostsType } from '.';

type AppPropsType = {
  posts: PostsType
  dialogs: DialogsType
  messages: MessagesType

}

const App: React.FC <AppPropsType> = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path='/profile' render={()=> <Profile posts={props.posts}/>}></Route>
        <Route path='/messages' render={()=> <Communication dialogs={props.dialogs} messages={props.messages} />}></Route>
        <Menu />
      </div>
    </BrowserRouter>
  );
}

export default App;
