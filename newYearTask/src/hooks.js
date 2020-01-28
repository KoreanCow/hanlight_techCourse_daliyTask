// 이 파일에 useInput을 작성하세요.
import { useState, useCallback } from 'react';

// function useInput(initialForm) {
//     const [input, setInput] = useState('');

//     const onChange = useCallback( e => setInput(e.target.value))
//     return [input, onChange];
// }

const useInput = (initValue) => {

  const [input, setInput ] = useState(initValue)
  
  const onChange = useCallback(e => {
      setInput(e.target.value)
  })
  return { onChange, input }
}

export default useInput
