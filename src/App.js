import logo from "./logo.svg";
import "./App.css";
import React, {
  Component,
  useCallback,
  useReducer,
  useRef,
  useState,
} from "react";
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

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
};

const todoReducer = (todos, action) => {
  switch (action.type) {
    case "INSERT": // 새로 추가
      // { type: 'INSERT', todo: { id: 1, text: 'todo', checked: false }}
      return todos.concat(action.todo);
    case "REMOVE": // 제거
      // {type: 'REMOVE', id: 1}
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE": // 토글
      // {type: 'TOGGLE', id: 1}
      return todos.map((todo) => {
        return todo.id === action.id
          ? { ...todo, checked: !todo.checked }
          : todo;
      });
    default:
      return todos;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고유 값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({
      type: 'INSERT',
      todo
    })
    nextId.current += 1; // nextId 1씩 더하기
  }, []);

  /** 스케쥴 삭제 함수
   * 삭제할 스케쥴의 id 가 들어오면 setTodos 로 기존의 todos 의 id 와
   * onRemove 함수로 들어온 id 를 제외한 todos 배열을 업데이트 시켜줌*/
  const onRemove = useCallback((id) => {
    dispatch({
      type: 'REMOVE',
      id
    })
  }, []);

  /** 배열 내장함수 map 을 사용해 id 를 가지고있는 객체의 checked 값을 반전 시켜줬음
   * 불변성을 유지하면서 특정 배열 원소를 업데이트해야할때 map 을 사용하면 짧은 코드로 작성 가능
   * map 함수는 배열을 전체적으로 새로운 형태로 변환해 새로운 배열을 생성함
   * todo.id 와 현재 파라미터로 사용된 id 값이 같을때 새로운 객체를 생성
   * id 값이 다를땐 변화를 주지않고 처음 받아왔던 상태 그대로 반환
   * map 을 사용해 만든 배열에서 변화가 필요한 원소만 업데이트되고 나머지는 그대로 남아있음*/
  const onToggle = useCallback((id) => {
    dispatch({
      type: 'TOGGLE',
      id
    })
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};
export default App;

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
