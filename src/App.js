import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Routes, Route } from "react-router-dom";
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from '../src/components/Profile/ProfileContainer';
import Preloader from './components/common/preloader/Preloader';
import { initializeApp } from '../src/redux/app-reducer';

// import ProfileContainer from './components/Profile/ProfileContainer';
// import DialogsContainer from './components/Dialogs/DialogsContainer';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));



class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp(); //намерение получить данные
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <React.Suspense fallback={<div><Preloader /></div>}>
            <Routes>
              <Route path="/dialogs" element={<DialogsContainer />} />

              <Route path="/profile" element={<ProfileContainer />} >
                <Route path=":userId" element={<ProfileContainer />} />
              </Route>

              <Route path="/users" element={<UsersContainer />} />

              <Route path="/login" element={<Login />} />
              {/* <Route path="/login" element={isAuth ? <Navigate to="/" replace /> :  <Login />}  /> */}

              <Route path="/news" element={<News />} />

              <Route path="/music" element={<Music />} />

              <Route path="/settings" element={<Settings />} />
            </Routes>
          </React.Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

// Когда оборачиваем компоненту с роутами, надо дополнительно оборачивать в withRouter, чтобы не было бага
export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
