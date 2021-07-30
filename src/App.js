import HeaderText from './Components/headerText';


function App() {
  return (
    <div>
      <HeaderText content={"Todo List"} />

      <div class="box">
        <div>
          <button class="btn"></button>
        </div>
        <div class="head">
        <h2>Check today</h2>
        </div>
        <button class="tag"></button>
      </div>
    </div>
  );
}

export default App;
