import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import Inventory from "./Component/Inventory/Inventory";
import Login from "./Component/Login/Login";
import Order from "./Component/Order/Order";
import Register from "./Component/Register/Register";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import Shipment from "./Component/Shipment/Shipment";
import Shop from "./Component/Shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/order" element={<Order />} />
        <Route
          path="/shipment"
          element={
            <RequireAuth>
              <Shipment />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
