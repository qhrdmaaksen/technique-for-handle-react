import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import ScrollBox from './etc/scrollSampleStudy/ScrollBox'
import IterationSampleTest from "./etc/mapListSamepleStudy/IterationSampleTest";
import LifeCycleSample from "./etc/lifeCycleSampleStudy/LifeCycleSample";
import ErrorBoundary from "./etc/lifeCycleSampleStudy/ErrorBoundary";

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

// 랜덤 색상을 생성함
// getRandomColor 함수는 state 의 color 값을 랜덤 색상으로 설정/16777215 를 hex 로 표현하면 ffffff 가 되며 해당 코드는 000000 부터 ffffff 값을 반환함
//버튼을 렌더링하고 누를때 handleClick 메서드가 호출되기 이벤트를 설정했으며 불러온 LifeCycleSample 컴포넌트에 color 값을 props 로 설정함
function getRandomColor() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

class App extends Component {
	state = {
		color: '#000000'
	}
	handleClick = () => {
		this.setState({
			color: getRandomColor()
		})
	}

	render() {
		return (
				<div>
					<button onClick={this.handleClick}>랜덤 색상</button>
					<ErrorBoundary>
						<LifeCycleSample color={this.state.color}/>
					</ErrorBoundary>
				</div>
		)
		/*map list 출력 테스트
		return (
				<IterationSampleTest />
		)*/
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
