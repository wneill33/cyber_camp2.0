import './App.css';
import PanelView from './PanelView/PanelView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './base/FireBase/LandingPage/LandingPage';
const App=()=> {
  return (
    <div className="app">
      
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>}/>
          <Route exact path="/home" element={<PanelView />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
