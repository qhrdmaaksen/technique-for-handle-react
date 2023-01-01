import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";
import ScrollBox from "./etc_study/etc_react_hello/scrollSampleStudy/ScrollBox";
import IterationSampleTest from "./etc_study/etc_react_hello/mapListSamepleStudy/IterationSampleTest";
import LifeCycleSample from "./etc_study/etc_react_hello/lifeCycleSampleStudy/LifeCycleSample";
import ErrorBoundary from "./etc_study/etc_react_hello/lifeCycleSampleStudy/ErrorBoundary";
import Counter from "./etc_study/etc_hooks_tutorial/useState-etc/Counter";
import Info from "./etc_study/etc_hooks_tutorial/useState-etc/Info";
import ReducerCounter from "./etc_study/etc_hooks_tutorial/useReducer-etc/ReducerCounter";
import ReducerInfo from "./etc_study/etc_hooks_tutorial/useReducer-etc/ReducerInfo";
import AverageUseMemo from "./etc_study/etc_hooks_tutorial/useMemo-etc/AverageUseMemo";
import UserInfo from "./etc_study/etc_hooks_tutorial/customHooks/UserInfo";
import SassComponent from "./etc_study/etc_componentStyling/useSassStudy/SassComponent";
import CSSModule from "./etc_study/etc_componentStyling/useCssModuleStudy/CSSModule";
import StyledComponent from "./etc_study/etc_componentStyling/useStyledComponentsStudy/StyledComponent";
import TodoTemplate from "./TodoApp/todo_components/TodoTemplate";
import TodoInsert from "./TodoApp/todo_components/TodoInsert";
import TodoList from "./TodoApp/todo_components/TodoList";


const App = () => {
  return (
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
  )
}
export default App

/* use styled-component study test
const App = () => {
  return (
      <div>
        <StyledComponent />
      </div>
  )
}
export default App*/

/* css module study test
const App = () => {
  return (
      <div>
        <CSSModule />
      </div>
  )
}
export default App*/

/* use sass study test
const App = () => {
  return (
      <div>
        <SassComponent />
      </div>
  )
}
export default App*/

/* useReducer 사용해 유저 정보 입력 test
const App = () => {
  return (
      <div>
        <UserInfo />
      </div>
  )
}
export default App*/
/* 평균 값 계산기 컴포넌트
const App = () => {
  return (
      <div>
        <AverageUseMemo />
      </div>
  )
}
export default App*/

/* reducer info test
const App = () => {
  return (
      <div>
        <ReducerInfo />
      </div>
  )
}
export default App*/

/* reducer counter test
const App = () => {
  return (
      <div>
        <ReducerCounter />
      </div>
  )
}
export default App*/

/* user info visible test
const App = () => {
  const [visible, setVisible] = useState(false);

  const onClickVisibleHandler = () => {
    setVisible(!visible)
  }

  return (
      <div>
        <button onClick={onClickVisibleHandler}>{visible ? '숨기기' : '보이기'}</button>
        <hr />
        {visible && <Info />}
      </div>
  );
};
export default App;*/

/* counter test
const App = () => {
  return <Counter />
}
export default App*/

/*// 랜덤 색상을 생성함
// getRandomColor 함수는 state 의 color 값을 랜덤 색상으로 설정/16777215 를 hex 로 표현하면 ffffff 가 되며 해당 코드는 000000 부터 ffffff 값을 반환함
//버튼을 렌더링하고 누를때 handleClick 메서드가 호출되기 이벤트를 설정했으며 불러온 LifeCycleSample 컴포넌트에 color 값을 props 로 설정함
function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
    /!*map list 출력 테스트
		return (
				<IterationSampleTest />
		)*!/
    /!*
		scroll test
		return (
				<div>
					<ScrollBox ref={(ref) => this.scrollBox = ref}/>
					<button onClick={() => this.scrollBox.scrollToBottom()}>
						맨 밑으로
					</button>
				</div>
		)*!/
  }
}

export default App;*/
