import logo from './logo.svg';
import './App.css';
import LogIn from './logIn/LogIn';
import MySpace from './mySpace/MySpace';
import data from './mySpace/dataBase.json'
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/*" element={<LogIn />} />
      <Route path="/main" element={<MySpace />} />
    </Routes>
    </Router>
  );
}

export default App;
