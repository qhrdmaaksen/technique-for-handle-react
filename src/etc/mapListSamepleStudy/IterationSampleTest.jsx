import {useState} from "react";

const IterationSampleTest = () => {
	const [names, setNames] = useState([
		{id: 1, text: '눈사람'},
		{
			id: 2,
			text: '얼음'
		},
		{
			id: 3,
			text: '눈'
		},
		{
			id: 4,
			text: '바람'
		},
	])
	const [inputText, setInputText] = useState('')
	const [nextId, setNextId] = useState(5) // 새로운 항목을 추가 시 사용할 id

	const inputOnChangeHandler = (e) => {
		setInputText(e.target.value)
	}

	const onClickAddListHandler = () => {
		const nextNames = names.concat({
			id: nextId,
			text: inputText,
		})
		setNames(nextNames) // names 의 값을 업데이트
		setInputText('') // inputText 비우기
		setNextId(nextId + 1) // nextId 값에 1 더해줌
	}

	/** nameList 함수에서 onRemove 통해 들어온 id 와
	 * 기존의 names 의 아이디와 비교해 제외하고 나머지를 names 로 업데이트해줌*/
	const onRemove = (id) => {
		const nextNames = names.filter(name => name.id !== id)
		setNames(nextNames)
	};

	const onKeyPressHandler = (e) => {
		if (e.key === 'Enter') {
			onClickAddListHandler()
		}
	}

	/** li tag 더블 클릭 시 onRemove 함수 호출*/
	const nameList = names.map(name => (
			<li key={name.id} onDoubleClick={() => onRemove(name.id)}>
				{name.text}
			</li>
	))
	console.log(nameList)

	return (
			<>
				<input value={inputText} onChange={inputOnChangeHandler} onKeyPress={onKeyPressHandler}/>
				<button onClick={onClickAddListHandler}>추가</button>
				<ul>{nameList}</ul>
			</>
	)
}
export default IterationSampleTest