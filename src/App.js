import { Route, Routes } from "react-router-dom";
import "./App.css";

// Prime React
import "primereact/resources/themes/lara-light-blue/theme.css"; // Theme
import "primereact/resources/primereact.min.css"; // PrimeReact
import "primeicons/primeicons.css"; // icon
import Layout from "./layouts/Layout";
import LandingPage from "./pages/LandingPage";
import CreateAccount from "./pages/sign/CreateAccount";
import Login from "./pages/sign/Login";
import ContactPage from "./pages/ContactUs";
import TariffsPage from "./pages/TariffsPage";
import PaymentPage from "./pages/PaymentPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tariffs" element={<TariffsPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/user" element={<UserPage />} />
        </Route>
        <Route path="/create_account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
