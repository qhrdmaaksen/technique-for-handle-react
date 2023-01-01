import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';
import {useCallback, useState} from "react";

const TodoInsert = () => {
	const [value, setValue] = useState('')

	/** input 입력 값 받기
	 * 컴포넌트가 리렌더링될때마다 함수를 새로만드는것이아닌
	 * 한번 함수를 만들고 재사용할 수 있도록 useCallback 사용*/
	const onChange = useCallback((e) => {
		setValue(e.target.value)
	}, [])

	return (
			<form className="TodoInsert">
				<input
					placeholder="할 일을 입력하세요."
					value={value}
					onChange={onChange}
				/>
				<button type="submit">
					<MdAdd/>
				</button>
			</form>
	)
}
export default TodoInsert