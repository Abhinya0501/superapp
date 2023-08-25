import "./App.css";
import RegistrationPage from "./pages/RegistrationPage";
import SelectCategory from "./pages/SelectCategory";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/selectcategory" element={<SelectCategory />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    // <HomePage />
  );
}

export default App;
