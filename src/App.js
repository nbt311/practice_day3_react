import Welcome from "./components/Welcome";
import AddComponent from "./components/AddComponent";
import Counter from "./components/Counter";
import ChangeColor from "./components/ChangeColor";
import Hello from "./components/Hello";
import DeleteComponent from "./components/DeleteComponent";


function App() {
  return (
  <div>
    <Welcome/>
    <AddComponent firstNumber={1} secondNumber={2} />
    <Counter/>
    <ChangeColor/>
    <DeleteComponent/>
  </div>
  );
}
export default App;
