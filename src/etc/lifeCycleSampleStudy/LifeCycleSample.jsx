import {Component} from "react";

/** 해당 컴포넌트는 각 라이프사이클 메서드를 실행할때마다 콘솔 디버거에 기록하며 부모 컴포넌트에서
 * props 로 색상을 받아 버튼을 누르면 state.number value 를 1씩 더 함
 * -getDerivedStateFromProps 는 부모에게 받은 color 값을 state 에 동기화하며 getSnapshotBeforeUpdate 는
 * --DOM 에 변화가 일어나기 직전의 색상 속성을 snapshot 값으로 반환해 이것을 componentDidUpdate 에서 조회할수 있게함
 * --추가로 shouldComponentUpdate 에서 state.number 값의 마지막 자리수가 4 이면 리렌더링을 취소하도록 설정함*/
class LifeCycleSample extends Component {
	state = {
		number: 0,
		color: null,
	}
	myRef = null // ref 설정할 부분임

	constructor(props) {
		super(props)
		console.log('constructor')
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		console.log('getDerivedStateFromProps')
		if (nextProps.color !== prevState.color) {
			return {color: nextProps.color}
		}
		return null;
	}
	componentDidMount() {
		console.log('componentDidMount')
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log('shouldComponentUpdate', nextProps,nextState)
		//숫자의 마지막 자리가 5면 리렌더링하지 않음
		return nextState.number % 10 !== 4
	}
	componentWillUnmount() {
		console.log('componentWillUnmount')
	}
	handleClick = () => {
		this.setState({
			number: this.state.number +1
		})
	}
	getSnapshotBeforeUpdate(prevProps, prevState, snapshot) {
		console.log('componentDidUpdate', prevProps,prevState)
		if(snapshot) {
			console.log('업데이트되기 직전 색상:::', snapshot)
		}
	}
	render () {
		console.log('render')

		const style = {
			color: this.props.color
		}
		return (
				<div>
					<h1 style={style} ref={ref=>this.myRef=ref}>
						{this.state.number}
					</h1>
					<p>color: {this.state.color}</p>
					<button onClick={this.handleClick}>더하기</button>
				</div>
		)
	}
}
export default LifeCycleSample

