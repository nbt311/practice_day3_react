import Welcome from "./components/Welcome";
import AddComponent from "./components/AddComponent";


function App() {
  return (
  <div>
    <Welcome/>
    <AddComponent firstNumber={1} secondNumber={2} />
  </div>
  );
}

export default App;
