import { useEffect, useState } from "react";

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
  value: LocalStorageReturnValue,
  {
    setItem: (value: LocalStorageSetValue) => void;
    removeItem: () => void;
  }
];

const getValueStorage = (key: string) => {
  const saveValue: LocalStorageReturnValue = localStorage.getItem(key);

  if (typeof saveValue === "string") {
    return JSON.parse(saveValue);
  }

  return saveValue;
};

export const useLocalStorage: UseLocalStorage = (key: string) => {
  const [value, setValue] = useState<LocalStorageReturnValue>(() =>
    getValueStorage(key)
  );

  const removeItem = () => {
    if (value !== null) {
      setValue(null);
    }
  };

  const setItem = (newValue: string) => {
    if (newValue !== value) {
      setValue(newValue);
    }
  };

  useEffect(() => {
    if (value !== null) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
    }
  }, [value]);

  return [value, { setItem, removeItem }];
};
