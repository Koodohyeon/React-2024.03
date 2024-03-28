import './App.css';

function App() {
  const foods = ['피자', '삽겹살', '불고기'];
  return (
    <>
      <ul>내가 좋아하는 음식</ul>
      {
        foods.map((food, idx) => (
          <li>{food}</li>
        ))
      }
    </>
  );
}

export default App;