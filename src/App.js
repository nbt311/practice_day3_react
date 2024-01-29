import Welcome from "./components/Welcome";
import AddComponent from "./components/AddComponent";
import Counter from "./components/Counter";
import ChangeColor from "./components/ChangeColor";


function App() {
  return (
  <div>
    <Welcome/>
    <AddComponent firstNumber={1} secondNumber={2} />
    <Counter/>
    <ChangeColor/>
  </div>
  );
}

export default App;
