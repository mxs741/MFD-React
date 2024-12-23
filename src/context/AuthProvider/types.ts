import { ReactNode } from "react";

export interface AuthContextValue {
  user: string | null;
  signin: (newUser: string, callback: () => void) => void;
  signout: (callback: () => void) => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
