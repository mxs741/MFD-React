import episodes from "../../data/episode.json";
import characters from "../../data/characters.json";
import locations from "../../data/location.json";
import { CategoryType } from "../types/types";

export const dataMap: Record<string, CategoryType[]> = {
  episodes,
  characters,
  locations,
};

export const Paths = {
  Home: "/home",
  Category: "/categories/:name",
  Element: "/categories/:name/:id",
  Login: "/login",
};

export const pages = {
  Home: "home",
  Characters: "characters",
  Locations: "locations",
  Episodes: "episodes",
};
