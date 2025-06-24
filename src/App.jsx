import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import CamperDetailsPage from "./pages/CamperDetailsPage";

import { NavLink } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div>
      <Layout />
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/" element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="catalog/:id" element={<CamperDetailsPage />} />
        {/* </Route> */}
      </Routes>
    </div>
  );
};

export default App;
