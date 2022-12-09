import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Routes, Route } from "react-router-dom";

function App({ store }) {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs" element={<DialogsContainer store={store} />} />

            <Route path="/profile" element={<Profile store={store} />} />

            <Route path="/news" element={<News />} />

            <Route path="/music" element={<Music />} />

            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
