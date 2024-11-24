import { useReducer } from "react";

type UseToggleReturnType = [string | boolean, (action?: string) => void];

export const useToggle = (options?: string[]): UseToggleReturnType => {
  const initState = options && options.length > 0 ? options[0] : true;

  const reducer = (state: string | boolean, action: string | undefined) => {
    if (options && options.length > 0) {
      if (action && options.includes(action)) return action;

      const nextIndex = options.indexOf(state as string) + 1;
      return nextIndex === options.length ? options[0] : options[nextIndex];
    }

    return !state;
  };

  return useReducer(reducer, initState);
};
