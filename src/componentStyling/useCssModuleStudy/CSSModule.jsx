//import styles from './CSSModule.module.css';
import styles from './CSSModule.module.scss';

import classNames from "classnames";
const CSSModule = () => {

	const cx = classNames.bind(styles) // 미리 styles 에서 클래스를 받아오도록 설정함

	return (
			/*classNames 와 css module 같이 사용한 경우*/
			<div className={cx('wrapper', 'inverted')}>
				안녕하세요, 저는 <span className="something">CSS Module!</span>
			</div>
	/* css module 만 사용했을 경우
	<div className={`${styles.wrapper} ${styles.inverted}`}>
				안녕하세요, 저는 <span className="something">CSS Module!</span>
			</div>*/
	)
}
export default CSSModule;