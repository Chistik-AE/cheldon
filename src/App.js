import './App.css';
import LogIn from './logIn/LogIn';
import MySpace from './mySpace/MySpace';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRouteMain from './contexts/PrivateRouteMain';




function App() {

  return (
    <Router>
      <Routes>
        <Route index path={"/login"} element={<LogIn />} />
        <Route element={<PrivateRouteMain />}>
          <Route path={"/main"} element={<MySpace />} />
          <Route path={"/"} element={<MySpace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
