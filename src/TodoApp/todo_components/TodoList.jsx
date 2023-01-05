import React, { useCallback } from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
import { List } from "react-virtualized";

const TodoList = ({ todos, onRemove, onToggle }) => {
  /** List 컴포넌트를 사용하기 위해 함수를 새로 작성했으며
   * 해당 함수는 react-virtualized 의 List 컴포넌트에서 각 TodoItem 을 렌더링할때 사용하며
   * 이 함수를 List 컴포넌트의 props 로 설정해줘야함
   * 이 함수는 파라미터에 index, key, style 값을 객체 타입으로 받아와서 사용함*/
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos]
  );

  return (
    /** List 컴포넌트를 사용할때 해당 리스트의 전체크기와 각 항목의 높이 각 항목을
     * 렌더링할때 사용해야하는 함수 / 그리고 배열을 props 로 넣어줘야하며 그러면
     * 이컴포넌트가 전달받은 props 를 사용해 자동으로 최적화해줌 */
    <List
      className="TodoList"
      width={512} // 전체 크기
      height={513} // 전체 높이
      rowCount={todos.length} // 항목 개수
      rowHeight={57} // 항목 높이
      rowRenderer={rowRenderer} // 항목을 렌더링할때 쓰는 함수
      list={todos} // 배열
      style={{ outline: "none" }} // List 에 기본적용되어있는 outline 스타일 제거
    />
  );
};
export default React.memo(TodoList);
