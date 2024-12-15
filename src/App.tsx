import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Paths } from "./constants/const";
import "./style.css";
import { PrivateRoute } from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthProvider";
import { lazy, Suspense } from "react";
import { Fallback } from "./components/Fallback";

const Home = lazy(() => import("./pages/Home"));
const Category = lazy(() => import("./pages/Category"));
const Element = lazy(() => import("./pages/Element"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  return (
    <AuthProvider>
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to={Paths.Home} />} />
          <Route
            path={Paths.Home}
            element={
              <Suspense fallback={<Fallback />}>
                <Home />
              </Suspense>
            }
          />
          <Route element={<PrivateRoute />}>
            <Route
              path={Paths.Category}
              element={
                <Suspense fallback={<Fallback />}>
                  <Category />
                </Suspense>
              }
            />
            <Route
              path={Paths.Element}
              element={
                <Suspense fallback={<Fallback />}>
                  <Element />
                </Suspense>
              }
            />
          </Route>
          <Route
            path={Paths.Login}
            element={
              <Suspense fallback={<Fallback />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Fallback />}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </>
    </AuthProvider>
  );
};

export default App;
