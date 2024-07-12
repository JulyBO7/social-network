import './App.css';
import { Header } from './components/header/Header';
import { Profile } from './components/profile/Profile';
import { Menu } from './components/menu/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import Communication from './components/messages/Communication';
import UsersContainer from './components/users/UsersContainer';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';
import { AppRootStateType } from './redux/store-redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FC } from 'react';
import { Preloader } from './components/common/preloader/Preloader';
import React from 'react';
import { initializeTC } from './redux/appReducer';

type Props = {
  isInitialized: boolean
  initialize: ()=> void
}
class App extends React.Component<Props>{
  componentDidMount(): void {
    this.props.initialize()
  }

  render (){
    if(!this.props.initialize) return <Preloader/>
    return (
      <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <Menu />
        <div>
          <Route path='/profile/:userId?' render={() => <Profile />}></Route>
          <Route path='/messages' render={() => <Communication />}></Route>
          <Route path='/users' render={() => <UsersContainer />}></Route>
          <Route path='/login' render={() => < Login />}></Route>
        </div>
      </div>
    </BrowserRouter>
    )
  }
}
const mapStateToProps = (state: AppRootStateType)=> {
  return({
    isInitialized: state.app.isInitialized
  })
}
export default connect(mapStateToProps, {initialize: initializeTC}) (App)

// path='/profile/:userId?'
