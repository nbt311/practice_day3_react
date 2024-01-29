import Welcome from "./components/Welcome";
import AddComponent from "./components/AddComponent";
import Counter from "./components/Counter";


function App() {
  return (
  <div>
    <Welcome/>
    <AddComponent firstNumber={1} secondNumber={2} />
    <Counter/>
  </div>
  );
}

export default App;
