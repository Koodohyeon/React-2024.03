import './App.css';

function App() {
  const name = 'James';
  const foods = ['피자', '삽겹살', '불고기'];
  return (
    // react에서는 hr을 사용하고 싶다면 <hr /> 이런식으로 해야하고 <div>나 <> 빈태그로 감싸면 가능하다.
    // 하지만 div와 같은 태그 안에서는 주석처리를 하려면 {/*  */} 이렇게 가능
    <div>
      <h1 style={{backgroundColor:"beige"}}> name: {name}</h1>
      <hr />  
      <img src="https://picsum.photos/200/200" className="photo" />
      <br />
    </div>
    
  );
}

export default App;
