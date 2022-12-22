import {useState} from 'react'

const Say = () => {
	const [message, setMessage] = useState('안내 메세지')

	const [color, setColor] = useState('black')

	const onClickEnter = () => {
		setMessage('입장을 환영합니다.')
		setColor('red')
	}

	const onClickLeave = () => {
		setMessage('안녕히가세요!')
		setColor('grey')
	}


	return (
			<div>
				<button onClick={onClickEnter}>입장</button>
				<button onClick={onClickLeave}>퇴장</button>
				<h2 style={{color}}>{message}</h2>
			</div>
	)
}
export default Say;