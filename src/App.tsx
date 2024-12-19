import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Paths } from "./constants/const";
import "./style.css";
import { PrivateRoute } from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthProvider";
import { lazy, Suspense } from "react";
import { Fallback } from "./components/Fallback";
import ErrorBoundary from "./ErrorBoundary";

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
                <ErrorBoundary>
                  <Home />
                </ErrorBoundary>
              </Suspense>
            }
          />
          <Route element={<PrivateRoute />}>
            <Route
              path={Paths.Category}
              element={
                <Suspense fallback={<Fallback />}>
                  <ErrorBoundary>
                    <Category />
                  </ErrorBoundary>
                </Suspense>
              }
            />
            <Route
              path={Paths.Element}
              element={
                <Suspense fallback={<Fallback />}>
                  <ErrorBoundary>
                    <Element />
                  </ErrorBoundary>
                </Suspense>
              }
            />
          </Route>
          <Route
            path={Paths.Login}
            element={
              <Suspense fallback={<Fallback />}>
                <ErrorBoundary>
                  <Login />
                </ErrorBoundary>
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Fallback />}>
                <ErrorBoundary>
                  <NotFound />
                </ErrorBoundary>
              </Suspense>
            }
          />
        </Routes>
      </>
    </AuthProvider>
  );
};

export default App;
