import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const handleClick = () => {
    setCount(count + 1);
    setNumbers([...numbers, count+1]);    // 새로운 객체를 참조하는 방법
   //  numbers.push(count+1); //  잘못된 방법
    console.log(count);
  }
  return (
    <>
        <div style={{fontSize: '5rem'}}>{count}</div>
        <h3>{numbers}</h3>
        <button onClick={handleClick}>증가하기</button>
    </>
  );
}

export default App;