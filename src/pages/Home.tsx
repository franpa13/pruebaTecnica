import { useFetchData } from "../hooks/useFetchData";
import { useFilterData } from "../hooks/useFilteredData";
import { LoadingComponent, SearchComponent, TableUsers } from "../components";
import { motion } from "framer-motion";
import { User } from "../types/types";

const columns = [
  { header: 'Nombre', accessor: 'name' },
  { header: 'Email', accessor: 'email' },
];

export const Home = () => {
  const [data, loading, error] = useFetchData<User>("/data/data.json");
  const [filteredData, setFilterValue] = useFilterData(data, ["name", "email"]);


  const handleSearch = (value: string) => {
    setFilterValue(value);
  };


  if (loading) return <LoadingComponent></LoadingComponent>;
  if (error) return <div>Error: {error}</div>;

  const animationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div initial="hidden"
      animate="visible"
      variants={animationVariants}
      transition={{ duration: 0.5, staggerChildren: 0.1 }} className="animate-fade-in-down">

      <div className="flex justify-center w-full mt-0">
        <SearchComponent onSearch={handleSearch} />
      </div>
      <div className="w-full flex justify-center mt-12">
        <TableUsers columns={columns} data={filteredData} />
      </div>



    </motion.div>
  );
};
