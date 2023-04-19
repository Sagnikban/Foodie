
import './App.css';
import Footer from './components/Footer';
import Home from './screens/HomePage';
import Login from './screens/Login';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>


  );
}

export default App;
