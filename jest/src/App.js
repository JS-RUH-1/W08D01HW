import logo from "./logo.svg";
import "./App.css";

export function Sum() {
  let args = Array.prototype.slice.call(arguments);
  return args.reduce((a, b) => a + b, 0);
}

export function Filter(s) {
  var args = Array.prototype.slice.call(arguments);
  if (args.length === 0) return "Unknown";

  if (s.includes(" ")) {
    s = s.split(" ").join("");
  }
  if (s[0] === "_") {
    s = s.substring(1);
  }
  let arr = s.split("");

  if (arr[0] === "_") {
    arr.splice(0, 1);
    return arr.join("");
  }
  if (arr.length < 10) return arr.join("");

  return s.substring(0, 10);
}

function App() {
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
    </div>
  );
}

export default App;
