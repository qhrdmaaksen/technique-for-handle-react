const IterationSampleTest = () => {
	const name = ['봄','여름','가을','겨울']

	const nameList = name.map(name => <li>{name}</li>)
	console.log(nameList)
	return <ul>{nameList}</ul>
}
export default IterationSampleTest