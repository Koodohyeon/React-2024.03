import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    if (count < 5) {
      setCount(prevCount => prevCount + 1); // 이전 상태값을 받아와 새로운 상태를 설정합니다.
      console.log(count);
    }
  }
  return (
    <>
        <div style={{fontSize: '5rem'}}>{count}</div>
        <button onClick={handleClick}>증가하기</button>
    </>
  );
}

export default App;