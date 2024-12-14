import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Element from "./pages/Element";
import Category from "./pages/Category";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import { Paths } from "./constants/const";
import "./style.css";
import { PrivateRoute } from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthProvider";
import { Login } from "./pages/Login";

const App = () => {
  return (
    <AuthProvider>
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to={Paths.Home} />} />
          <Route path={Paths.Home} element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path={Paths.Category} element={<Category />} />
            <Route path={Paths.Element} element={<Element />} />
          </Route>
          <Route path={Paths.Login} element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </AuthProvider>
  );
};

export default App;
