import logo from './logo.svg';
import './App.css';
import LogIn from './logIn/LogIn';
import MySpace from './mySpace/MySpace';
import data from './mySpace/dataBase.json'


function App() {
  return (
    <div className="App">
      {/* <LogIn /> */}
      <MySpace />
    </div>
  );
}

export default App;
