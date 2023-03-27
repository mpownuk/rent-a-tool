import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Header from "./components/Header";
import User from "./components/User";
import Tools from "./components/Tools";
import UserDashboard from "./components/UserDashboard";
import NotFound from "./components/NotFound";
import Tool from "./components/Tool";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header appName={"Rent a Tool"} />}>
          <Route path="*" element={<NotFound />} />
          <Route path="tools" element={<Tools />} />
          <Route
            path="tools/:id"
            element={
              <Tool
                id={0}
                name={""}
                description={""}
                category={""}
                price={0}
                image={""}
                available={0}
              />
            }
          />
          <Route path="login" element={<LoginPage />} />
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
          <Route path="user" element={<User />}>
            <Route index element={<UserDashboard />} />
          </Route>
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
