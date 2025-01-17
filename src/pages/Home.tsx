import { useFetchData } from "../hooks/useFetchData";

import { LoadingComponent, SearchComponent, TableUsers } from "../components";
import { motion } from "framer-motion";

import { useState } from "react";
import { useFilterData } from "../hooks/useFilteredData";

const columns = [
  { header: 'Nombre', accessor: 'name' },
  { header: 'Email', accessor: 'email' },
];

export const Home = () => {
  const [data, loading, error] = useFetchData("/data/data.json");
  const [filteredData, setFilter] = useFilterData(data, ['name', 'email']);
  // estado para mostrar todos los resultados de una vez en vez de paginarlo
  const [filterValue, setFilterValue] = useState("");

  const handleSearch = (value: string) => {
    setFilter(value);
    setFilterValue(value)
  };

  if (loading) return <LoadingComponent />;
  if (error) return <div>Error: {error}</div>;

  const animationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
    >
      <div className="flex justify-center w-full mt-0">
        <SearchComponent onSearch={handleSearch} />
      </div>
      <div className="w-full flex justify-center mt-12">
        <TableUsers columns={columns} data={filteredData} filterValue={filterValue} />
      </div>
    </motion.div>
  );
};