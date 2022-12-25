import { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  useEffect(() => {
    console.log("마운트 될 때만 실행됩니다.");
    console.log({
      name,
      nickName,
    });
    return () => {
      console.log("clean up");
      console.log({
        name,
        nickName,
      });
    };
    // 빈 배열을 넣어주면 마운트 될 때만 실행됩니다.
    // 배열 안에 요소를 넣어주면 해당 요소가 변경될 때만 실행됩니다.
  }, [name, nickName]);
  const enteredNameHandler = (e) => {
    setName(e.target.value);
    e.preventDefault();
  };
  const enteredNickNameHandler = (e) => {
    setNickName(e.target.value);
    e.preventDefault();
  };

  return (
    <div>
      <h1>userInfo</h1>
      <input value={name} onChange={enteredNameHandler} />
      <input value={nickName} onChange={enteredNickNameHandler} />
      <p>name : {name}</p>
      <p>nickName : {nickName}</p>
    </div>
  );
};
export default Info;
