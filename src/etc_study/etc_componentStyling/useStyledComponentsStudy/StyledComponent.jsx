/*단순 변수의 형태가 아닌 여러줄의 스타일 구문을 조건부로 설정해야하는 경우 css 를 불러와야함*/
import styled, { css } from "styled-components";

const sizes = {
  desktop: 1024,
  tablet: 768,
};
// 위에있는 size 객체에따라 자동으로 media 쿼리 함수를 만들어줌
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
  `;
  return acc;
}, {});

const Box = styled.div`
  /** props 로 넣어준 값을 직접 전달해줄수 있음
  *백그라운드 값에 프롭스를 조회해서 props.color 값을 사용하게하고 props.color 값이
  주어지지 않았을 경우 color 는 blue 를 기본 색상 값으로 설정*/
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;

  /** 기본적으로 가로 크기 1024px 에 가운데 정렬을 하고
  가로 크기가 작아짐에따라 크기를 줄이고 768px 미만이되면 꽉채우도록함*/
  width: 1024px;
  margin: 0 auto;
  ${media.desktop`width: 768px;`}
  ${media.tablet`width: 100%;`}
  /*@media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }*/
`;

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* & 문자를 사용해 Sass 처럼 자기 자신 선택 가능*/
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  /* 다음 코드는 inverted 값이 true 일 경우 특정 스타일 부여함*/
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;

      &:hover {
        background: white;
        color: black;
      }
    `}
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color="black">
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
};
export default StyledComponent;
