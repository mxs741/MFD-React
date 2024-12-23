import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "../../utils/ErrorBoundary";
import { Paths } from "../../constants/const";
import { Fallback } from "../../components/Fallback";
import { PrivateRoute } from "../PrivateRoute";

const Home = lazy(() =>
  import("../../pages/Home").then((module) => ({ default: module.Home }))
);
const Category = lazy(() =>
  import("../../pages/Category").then((module) => ({
    default: module.Category,
  }))
);
const Element = lazy(() =>
  import("../../pages/Element").then((module) => ({
    default: module.Element,
  }))
);
const Login = lazy(() =>
  import("../../pages/Login").then((module) => ({ default: module.Login }))
);
const NotFound = lazy(() =>
  import("../../pages/NotFound").then((module) => ({
    default: module.NotFound,
  }))
);

export const AppRouter = (): JSX.Element => {
  return (
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
  );
};
