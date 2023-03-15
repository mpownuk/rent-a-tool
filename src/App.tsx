import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Header from "./components/Header";
import Tools from "./components/Tools";
import UserDashboard from "./components/UserDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header appName={"Rent a Tool"} />}>
          <Route path="tools" element={<Tools />} />
          <Route
            path="login"
            element={
              <LoginPage
                onLoginSuccess={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            }
          />
          <Route
            path="register"
            element={
              <RegisterPage
                onRegisterSuccess={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            }
          />
          <Route path="user" element={<UserDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
