import './App.css';
import LogIn from './logIn/LogIn';
import MySpace from './mySpace/MySpace';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRouteMain from './contexts/PrivateRouteMain';
import PrivateRouteLogIn from './contexts/PrivateRouteLogIn';



function App() {
  const isAuth = Boolean(localStorage.getItem('isAuth'));

  return (
    <Router>
      <Routes>
        <Route element={<PrivateRouteLogIn isAuth={isAuth} />}>
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/" element={<LogIn />} />
        </Route>
        <Route element={<PrivateRouteMain isAuth={isAuth} />}>
          <Route path={"/main"} element={<MySpace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
