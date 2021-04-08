import logo from './logo.svg';
import './App.css';
//import ToggleClock from "./components/ToggleClock";
//import NumbersList from "./components/NumbersList";
import Blog from "./components/Blog";

function App() {

  var posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label>
          <Blog posts={posts} />
        </label>
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
    </div>
  );
}

export default App;
