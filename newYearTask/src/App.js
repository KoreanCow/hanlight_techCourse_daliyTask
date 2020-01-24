import React, {useReducer} from "react";
import styled from "styled-components";
import Palette from "./Palette";
import Text from "./Text";

const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const colors = [
  { pk: 1, color: "#000000" },
  { pk: 2, color: "#ff0000" },
  { pk: 3, color: "#ffff00" },
  { pk: 4, color: "#0000ff" },
  { pk: 5, color: "#7700ff" }
];

function reducer(state, action){
    switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

export default function App() {
  // 밑의 두 줄을 지우고 작업하세요.
  // const dispatch = action => console.log(action);
  const state = { color: "what can you do?",/* count: "this is count" */};
  
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <Wrapper>
      <Palette
        colors={colors}
        selectedColor={state.color}
        // dispatch={dispatch}
      />
      <Text
        selectedColor={state.color}
        count={count}
        dispatch={dispatch}
      />
    </Wrapper>
  );
}
