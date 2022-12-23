import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import ScrollBox from './etc/scrollSampleStudy/ScrollBox'
import IterationSampleTest from "./etc/mapListSamepleStudy/IterationSampleTest";

/*function App() {
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
}*/
class App extends Component {
	render() {
		return (
				<IterationSampleTest />
		)
		/*
		scroll test
		return (
				<div>
					<ScrollBox ref={(ref) => this.scrollBox = ref}/>
					<button onClick={() => this.scrollBox.scrollToBottom()}>
						맨 밑으로
					</button>
				</div>
		)*/
	}
}

export default App;
