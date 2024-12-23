import { Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "./layout/Navigation";
import { Paths } from "./constants/const";
import "./style.css";
import { PrivateRoute } from "./routes/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./context/AuthProvider";
import { lazy, Suspense } from "react";
import { Fallback } from "./components/Fallback";
import { ErrorBoundary } from "./utils/ErrorBoundary";
import { AppRouter } from "./routes/AppRouter";

export const App = () => {
  return (
    <AuthProvider>
      <Navigation />
      <AppRouter />
    </AuthProvider>
  );
};
