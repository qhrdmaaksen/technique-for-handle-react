import {useReducer} from "react";

const reducer = (state, action) => {
	return {
		...state,
		[action.name]: action.value
	}
}
const ReducerInfo = () => {
	const [state, dispatch] = useReducer(reducer, {
		name: '',
		nickname: ''
	})

	const {name, nickname} = state

	const enteredHandler = (e) => {
		dispatch(e.target)
	}

	return (
			<div>
				<div>
					<input name="name" value={state.name} onChange={enteredHandler} />
					<input name="nickname" value={state.nickname} onChange={enteredHandler} />
				</div>
				<div>
					<p>name : {name}</p>
					<p>nickname : {nickname}</p>
				</div>
			</div>
	)
}
export default ReducerInfo