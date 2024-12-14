export interface Episodes {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  created: string;
}

export interface Characters {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  created: string;
}

export interface Locations {
  id: number;
  name: string;
  type: string;
  dimension: string;
  created: string;
}

export type CategoryType = Episodes | Characters | Locations;

export type CategoryKeys = keyof CategoryType;

export interface AuthContextValue {
  user: string | null;
  signin: (newUser: string, callback: () => void) => void;
  signout: (callback: () => void) => void;
}

export interface AuthProviderProps {
  children: JSX.Element;
}
