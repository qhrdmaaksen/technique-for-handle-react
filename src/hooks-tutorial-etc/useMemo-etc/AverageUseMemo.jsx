import {useCallback, useMemo, useState} from "react";

/** list 에 number 가 들어오면 평균값에 getAverage 함수로 평균 값 계산하여 반환해줌*/
const getAverage = (numbers) => {
  console.log("평균값 계산중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};
const AverageUseMemo = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // useCallback 을 사용해 컴포넌트가 처음 렌더링될 때만 함수 생성되도록함
  const onChangeNumber = useCallback((e) => {
    setNumber(e.target.value);
  },[]);

  /** 숫자 등록 시 list 배열에 concat 으로 숫자를 넣어주고 setList 로 list state 를 업데이트시켜줌
   * useCallback 을 사용해 number or list 가 바뀌었을때만 함수 생성 */
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  },[number, list]);

	/** useMemo 를 사용하여 getAverage 함수를 호출할 때 list 가 바뀔 때만 호출되도록 함*/
	const avg = useMemo(()=> getAverage(list), [list])

  return (
    <div>
      <input value={number} onChange={onChangeNumber} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b> {avg}
      </div>
    </div>
  );
};
export default AverageUseMemo;
