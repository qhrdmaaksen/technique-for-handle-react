import './ValidationSample.css'
import {useEffect, useRef, useState} from "react";

const ValidationSample = () => {
	const inputRef = useRef()
	const [password, setPassword] = useState('')
	const [clicked, setClicked] = useState(false)
	const [validated, setValidated] = useState(false)


	const handleChange = (e) => {
		setPassword(e.target.value)
	}

	const handleButtonClick = () => {
		setClicked(true)
		setValidated(password === '0000')
		inputRef.current.focus()
	}


	return (
			<div>
				<input
						type="password"
						ref={inputRef}
						onChange={handleChange}
						className={clicked ? (validated ? "success" : "failure") : ''}
				/>
				<button onClick={handleButtonClick}>Validation</button>
			</div>
	)
}
export default ValidationSample;