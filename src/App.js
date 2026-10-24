import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LogIn from "./pages/login.jsx";
import SignUp from "./pages/signup.jsx";
import Landing from "./pages/landing.jsx";

function App() {
  const [users, setUsers] = useState([
    { uname: "admin", password: "admin" },
    { uname: "mohith", password: "1234" },
    { uname: "john", password: "john123" },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        <Route
          path="/login"
          element={<LogIn users={users} />}
        />

        <Route
          path="/signup"
          element={<SignUp users={users} setUsers={setUsers} />}
        />

        <Route
          path="/landing"
          element={<Landing />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;