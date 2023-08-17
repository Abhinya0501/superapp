import "./App.css";
import HomePage from "./pages/HomePage";
import SelectCategory from "./pages/SelectCategory";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/selectcategory" element={<SelectCategory />} />
      </Routes>
    </BrowserRouter>
    // <HomePage />
  );
}

export default App;
