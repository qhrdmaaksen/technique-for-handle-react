import {useState} from "react";

const Counter = () => {
	const [counter, setCounter] = useState(0)

	return (
			<div>
				<p>Counting {counter}</p>
				<button
					onClick={()=>{
						setCounter(counter + 1)
					}}
				>+1 추가</button>
			</div>
	)
}
export default Counter;test