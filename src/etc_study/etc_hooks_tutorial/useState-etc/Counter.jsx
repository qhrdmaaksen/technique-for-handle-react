import {useState} from "react";

const Counter = () => {
	const [counter, setCounter] = useState(0)

	const addCounterHandler = () => {
		setCounter(counter + 1)
	}

	const removeCounterHandler = () => {
		setCounter(counter - 1)
	}

	return (
			<div>
				<p>현재 카운터 값은 : <b>{counter}</b> 입니다.</p>
				<button onClick={addCounterHandler}>+1</button>
				<button onClick={removeCounterHandler}>-1</button>
			</div>
	)
}
export default Counter;