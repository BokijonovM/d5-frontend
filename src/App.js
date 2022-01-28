import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyItems from "./components/MyItems";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetails from "./components/ItemDetails";
import Additem from "./components/Additem";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNav />

        <Routes>
          <Route path="/" element={<MyItems />} />
          <Route path="/:productId" element={<ItemDetails />} />
          <Route path="/new" element={<Additem />} />
        </Routes>

        <div className="main-footer">
          <MyFooter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
