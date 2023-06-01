import logo from './logo.svg';
import './App.css';

import Login from './login';



function App() {
 // let navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    window.location.replace("/")
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={() => logout()}>log out</button>
    </div>
  );
}

export default App;
