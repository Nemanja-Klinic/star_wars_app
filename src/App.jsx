import Login from "./components/Login/Login.jsx";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Resources from "./components/Resources/Resources.jsx";

const ProtectedRoute = (props) => {
  if (!localStorage.getItem("user")) {
    return <Navigate to="/" replace />;
  }
  return props.children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="resources/:type"
          element={
            <ProtectedRoute>
              <Navbar />
              <Resources />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
