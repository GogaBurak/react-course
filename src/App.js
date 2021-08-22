import logo from './logo.svg'; // Import function from folder
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import { BrowserRouter, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';

const App = (props) => { // App is component
  return (
    <BrowserRouter>  
      <div className='app-wrapper'>
          <Header />
          <Navbar />
        <div className='app-wrapper-content'> 
          <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />} />
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} 
                                                          addMess={props.addMess} 
                                                          updateNewMessText={props.updateNewMessText} />} />
          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
          <Route path='/settings' render={ () => <Settings />} />
        </div>
      </div>
    </BrowserRouter>  
  );
}

export default App;
