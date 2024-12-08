import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Element from "./pages/Element";
import Category from "./pages/Category";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import { Paths } from "./constants/const";
import "./style.css";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to={Paths.Home} />} />
        <Route path={Paths.Home} element={<Home />} />
        <Route path={Paths.Category} element={<Category />} />
        <Route path={Paths.Element} element={<Element />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
