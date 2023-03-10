import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoListItem.scss";
import cn from "classnames";

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { text, checked, id } = todo;

  /** 삭제 버튼 클릭 시 삭제를 누른 스케쥴 아이디를 onRemove 에 전달*/
  const handlerRemoveSchedule = () => {
    onRemove(id);
    console.log(id);
  };

  const handlerOnToggle = () => {
    onToggle(id);
  };

  return (
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div className={cn("checkbox", { checked })} onClick={handlerOnToggle}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={handlerRemoveSchedule}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};
export default React.memo(TodoListItem);
