import Home from "./Components/Home";
import Cart from "./Components/Cart";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
    </>
  );
}

export default App;
