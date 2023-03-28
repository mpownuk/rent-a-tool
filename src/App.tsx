import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Header from "./components/Header";
import User, { loader as userLoader } from "./components/user/User";
import Tools from "./components/Tools";
import NotFound from "./components/NotFound";
import Tool from "./components/Tool";
import Cart from "./components/Cart";
import { requireAuth } from "./methods/requireAuth";
import UserProfile from "./components/user/UserProfile";
import RentedTools from "./components/user/RentedTools";
import RenatlHistory from "./components/user/RentalHistory";
import Payment from "./components/user/Payment";

const router = createBrowserRouter(
  createRoutesFromElements(
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
      <Route path="user" loader={userLoader} element={<User />}>
        <Route index loader={() => requireAuth()} element={<UserProfile />} />
        <Route
          path="rented_tools"
          loader={() => requireAuth()}
          element={<RentedTools />}
        />
        <Route
          path="history"
          loader={() => requireAuth()}
          element={<RenatlHistory />}
        />
        <Route
          path="payment"
          loader={() => requireAuth()}
          element={<Payment />}
        />
      </Route>
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
