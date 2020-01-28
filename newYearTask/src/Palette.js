import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const Color = styled.div`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  border: ${({ bgColor, selectedColor }) =>
    bgColor === selectedColor ? "2px solid Grey" : "2px solid #ffffff"};
`;

// styled-component 를 모르는 사람을 위해.
// Color가 이미 다 스타일링이 되어 있습니다. 하나의 컴포넌트라고 생각하세요.
// bgColor와 selectedColor은 props입니다.
// Color를 선언할 때 템플릿 문자열을 사용했다는 점을 기억하세요.
// 어떻게 작동하는지 쉽게 알 수 있을거라 생각합니다.
// 모르겠다면 질문!

export default function Palette({ colors, selectedColor, dispatch }) {
  const select = () => dispatch({ type: 'SELECT_COLOR'})
  const eve = () => console.log('test');
  return(
  <Wrapper>
    {colors.map( color => (
      <Color 
      onClick={select, eve}
      selectedColor={selectedColor}
      bgColor={color.color}
      key={color.pk}
      />      
      ))}
  </Wrapper>
  ) 
}