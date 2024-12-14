import { createContext, useContext, useState } from "react";
import { AuthContextValue, AuthProviderProps } from "../types/types";

const defaultValue: AuthContextValue = {
  user: null,
  signin: () => {},
  signout: () => {},
};

const AuthContext = createContext(defaultValue);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<string | null>(localStorage.getItem("user"));

  const signin = (newUser: string, callback: () => void) => {
    setUser(newUser);
    localStorage.setItem("user", newUser);
    callback();
  };

  const signout = (callback: () => void) => {
    setUser(null);
    localStorage.removeItem("user");
    callback();
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
