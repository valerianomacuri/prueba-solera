import { useMemo } from "react";
import { useServices } from "./useServices";

export const useCategories = () => {
  const { services } = useServices();
  const carsCategory = useMemo(
    () => services?.filter((item) => item.category === "cars"),
    [services]
  );
  const healthCategory = useMemo(
    () => services?.filter((item) => item.category === "health"),
    [services]
  );
  const homeCategory = useMemo(
    () => services?.filter((item) => item.category === "home"),
    [services]
  );
  return {
    carsCategory,
    healthCategory,
    homeCategory,
  };
};
