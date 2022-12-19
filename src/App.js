import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
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
        </div>
      </div>
  );
}

export default App;
