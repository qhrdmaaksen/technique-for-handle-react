import useInputsCustom from "./useInputsCustom";

const UserInfo = () => {
	const [state, onChangeInput] = useInputsCustom({
		name: '',
		nickname: ''
	})

	const {name, nickname} = state

	return (
			<div>
				<div>
					<input name="name" value={name} onChange={onChangeInput} />
					<input name="nickname" value={nickname} onChange={onChangeInput} />
				</div>
				<div>
					<p>name : {name}</p>
					<p>nickname : {nickname}</p>
				</div>
			</div>
	)
}
export default UserInfo;