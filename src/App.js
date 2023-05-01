import "./App.css";
import { Expenses } from "./components/expeneses/Expenses";
import { Header } from "./components/header/Header";
import { NewProduct } from "./components/newProduct/NewProduct";

function App() {
  return (
    <div className="App">
      <NewProduct />
      <Header />
      <Expenses />
    </div>
  );
}

export default App;
