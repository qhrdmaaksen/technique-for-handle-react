import {useState} from "react";

const EventPractice = () => {
	const [form , setForm] = useState({
		username: '',
		message: ''
	})
	const {username, message} = form

	const onChangeHandler = (e) => {
		const nextForm = {
			...form, // 기존 form 내용을 복사
			[e.target.name]: e.target.value, // 값 덮어씌워주기
		}
		setForm(nextForm)
		console.log('username:::',username)
		e.preventDefault();
	}

	const confirmHandler = () => {
		alert(`사용자의 이름은 ${username} 입니다. 하고 싶은 말씀은 ${message} 입니다.`)
		// 초기화
		setForm({
			username: '',
			message: ''
		})
	}

	const onKeyPressHandler = (e) => {
		if(e.key === 'Enter') {
			confirmHandler()
		}
	}

	return (
			<div>
				<h1>사용자 이름</h1>
				<input
						name='username'
						type='text'
						placeholder="사용자 이름을 입력해주세요."
						defaultValue={username}
						onChange={onChangeHandler}
				/>
				<h2>메세지</h2>
				<input
						type='text'
						name='message'
						defaultValue={message}
						placeholder='아무내용이나 적어주세요'
						onKeyPress={onKeyPressHandler}
						onChange={onChangeHandler}
				/>
				<button onClick={confirmHandler}>확인</button>
			</div>
	)
}
export default EventPractice;