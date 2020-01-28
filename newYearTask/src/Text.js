import React, {useState} from "react";
import styled from "styled-components";
import useInput from './hooks'

const Wrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  text-align: start;
`;

const Input = styled.input`
  width: 20rem;
  font-size: 1rem;
`;

const Typography = styled.p`
  color: ${({ color }) => color};
  font-size: 2rem;
`;

export default function Text({ selectedColor, count, dispatch }) {

  const { input, onChange } = useInput('')
  
  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  return (
    <Wrapper>
      <Input value={input} placeholder='적어주세용'onChange={onChange} />
      <Typography color={selectedColor}>{input}</Typography>
      <Typography color={selectedColor}>{count}</Typography>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </Wrapper>
  );
}