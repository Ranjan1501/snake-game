import Game from "./components/Game";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./components/PrivateRoute";
import { Login } from "./components/Login";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Game />
            </PrivateRoute>
          }
        >
          {" "}
        </Route>
        <Route path="/login" element={<Login />}>
          {" "}
        </Route>
        <Route
          path="/about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        >
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
