// import logo from './logo.svg';
// import './App.css';
import Title from "./components/logo/logo";
import "./components/logo/logo.css";
import AddV from "./components/AddVegetable/AddVegetable";
import "./components/AddVegetable/AddVegetable.css";
import AddF from "./components/AddFruit/AddFruit";
import AddS from "./components/AddSpice/AddSpice";
import AddC from "./components/Cannedfood/CannedFood";


function App() {
  return (
    <div className="App">
      <Title />
      <AddV/>
      <AddF/>
      <AddS/>
      <AddC/>
    </div>
  );
}

export default App;
