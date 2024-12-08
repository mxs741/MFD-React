import { dataMap } from "../constants/const";
import { CategoryType } from "../types/types";

export const useData = (
  name?: string,
  id?: string
): CategoryType[] | CategoryType | null => {
  const data = dataMap[name || ""] || [];

  if (id) {
    return data.find((item: CategoryType) => item.id === Number(id)) || null;
  }

  return data;
};
