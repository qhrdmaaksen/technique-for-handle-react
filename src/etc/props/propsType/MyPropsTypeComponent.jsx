import PropTypes from 'prop-types'

const MyPropsTypeComponent = ({name}) => {
	return <p>제 이름은 {name} 입니다.</p>
}

/** 기본 프롭 설정*/
MyPropsTypeComponent.defaultProps= {
	name: 'vitamin777'
}

/** 프롭 타입 세팅 */
MyPropsTypeComponent.propTypes = {
	name: PropTypes.string,
}

export default MyPropsTypeComponent
