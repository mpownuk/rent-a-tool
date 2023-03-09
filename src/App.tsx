import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header appName={"rent a tool"} />}>
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
