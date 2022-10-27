import Login from "./components/Login/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <header className="logo"></header>
      <Routes>
        <Route path="/" element={<Login></Login>}/>
        <Route path="movies" element={<p>Movies</p>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
