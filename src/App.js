import logo from './logo.svg';
import './App.css';
import LogIn from './logIn/LogIn';
import MySpace from './mySpace/MySpace';
import data from './mySpace/dataBase.json'
import { BrowserRouter as Router, Route, Switch, Routes, useNavigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';



function App() {
  const isAuth = false;  //пока ручной блок, нужно понять как вытягивать значение isAuth из Login.js


  return (
    <Router>
      <Routes>
        <Route path="/logIn" element={<LogIn />} />
        <Route element={<PrivateRoute isAuth={isAuth} />}>
          <Route path={"/main"} element={<MySpace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
