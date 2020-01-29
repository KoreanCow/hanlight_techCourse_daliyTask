// 이 파일에 useInput을 작성하세요.
import { useState } from 'react';

// function useInput(initialForm) {
//     const [input, setInput] = useState('');

//     const onChange = useCallback( e => setInput(e.target.value))
//     return [input, onChange];
// }

const useInput = (Value) => {
  const [input, setInput ] = useState(Value)
  const onChange = e => setInput(e.target.value)
  return [input, onChange]
}

export default useInput
