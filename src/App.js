import styles from "./App.module.css";
import Login from "./components/Login/Login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
