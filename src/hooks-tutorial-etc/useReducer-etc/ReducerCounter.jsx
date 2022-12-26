import {useReducer} from "react";

const reducer = (state, action) => {
	switch (action.type) {
		case 'INCREMENT': return { value: state.value + 1};
		case 'DECREMENT': return { value: state.value - 1};
		default: return state;
	}
}
const ReducerCounter = () => {
	const [state, dispatch ] = useReducer(reducer, {value: 0})

	const onClickIncrementHandler = () => {
		dispatch({
			type: 'INCREMENT'
		})
	}

	const onClickDecrementHandler = () => {
		dispatch({
			type: 'DECREMENT'
		})
	}

	return (
			<div>
				<h1>Counter</h1>
				<p>현재 카운터 값은 {state.value}</p>
				<button onClick={onClickIncrementHandler}>+1</button>
				<button onClick={onClickDecrementHandler}>-1</button>
			</div>
	)
}
export default ReducerCounter;