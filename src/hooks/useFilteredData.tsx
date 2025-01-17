
import { useMemo, useState } from "react";
import { TableRow } from "../types/types";

export const useFilterData = <T extends { id: number; name: string; email: string }>(
  data: T[],
  filterKeys: (keyof T)[]
): [TableRow[], (value: string) => void] => {
  const [filter, setFilter] = useState("");

  const setFilterValue = (value: string) => {
    setFilter(value);
  };


  const filteredData = useMemo(() => {
    if (!filter) {
      return data.map(({ id, name, email }) => ({ id, name, email }));
    }

    const lowerCaseFilter = filter.toLowerCase();

    return data
      .filter((item) =>
        filterKeys.some((key) =>
          String(item[key]).toLowerCase().includes(lowerCaseFilter)
        )
      )
      .map(({ id, name, email }) => ({ id, name, email }));
  }, [data, filter, filterKeys]);  

  return [filteredData, setFilterValue];
};
