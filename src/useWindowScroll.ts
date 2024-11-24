import { useState } from "react";
import { useDebounce } from "./useDebounce";
import { useWindowEvent } from "./useWindowEvent";

interface Scroll {
  x: number;
  y: number;
}

export const useWindowScroll = (): [
  Scroll,
  (coordinates: Partial<Scroll>) => void
] => {
  const [scroll, setScroll] = useState<Scroll>({ x: 0, y: 0 });

  const handleScroll = useDebounce(
    () => setScroll({ x: scrollX, y: scrollY }),
    200
  );

  const scrollTo = (coordinates: Partial<Scroll>) => {
    window.scrollTo({ top: coordinates.y, left: coordinates.x });
  };

  useWindowEvent("scroll", handleScroll);

  return [scroll, scrollTo];
};
