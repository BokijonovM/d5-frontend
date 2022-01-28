import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyItems from "./components/MyItems";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <MyNav />
      <MyItems />
      <MyFooter />
    </div>
  );
}

export default App;
