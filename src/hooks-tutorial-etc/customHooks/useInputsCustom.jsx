import {useReducer} from "react";

const reducer = (state, action) => {
	return {
		...state,
		[action.name] : action.value
	}
}

/** useInputsCustom 을 사용하면 사용 컴포넌트에서 초기 값을 initialForm 으로 받고
 * useReducer 로 reducer 함수와 초기 값을 받은 initialForm 에 담아서
 * reducer 의 action 으로 들어온 name=name or name=nickname 에다가
 * 액션으로 들어온 값을 이전 상태 복사본에 붙여줘서 반환토록함*/
export default function useInputsCustom (initialForm) {
	const [state, dispatch] = useReducer(reducer, initialForm)
	const onChangeInput = (e) => {
		dispatch(e.target)
	}
	return [state, onChangeInput]
}
