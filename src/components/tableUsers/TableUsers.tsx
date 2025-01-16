import { useEffect, useState } from "react";
import { TableProps, TableColumn, TableRow } from "./../../types/types";
import { ErrorText } from "../ui/ErrorText";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { IconButton } from "@mui/material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export const TableUsers = ({ columns, data, actions }: TableProps) => {

  const navigate = useNavigate()
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;


  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);

  // REINICIAR A LA PAG 1 CUANDO BUSQUE ALGO
  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= Math.ceil(data.length / rowsPerPage)) {
      setCurrentPage(newPage);
    }
  };
  const viewUserDetail = (row: TableRow) => {
    navigate(`/user/${row.id}`)
  }
  return (
    <div className="w-full m-1 md:m-0 md:w-3/4 lg:w-1/2 md:mt-12 relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="overflow-x-auto">
        {data.length === 0 ? (
          <ErrorText text="No se encontraron usuarios" ></ErrorText>
        ) : (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-black uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {columns.map((column: TableColumn) => (
                  <th key={column.accessor} scope="col" className="px-6 py-3">
                    {column.header}
                  </th>
                ))}
                {actions && (
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                )}
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((row: TableRow, index: number) => (
                <tr
                  key={index}
                  className="bg-white dark:text-gray-40 font-semibold border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  {columns.map((column: TableColumn) => (
                    <td key={column.accessor} className="px-6 py-4">
                      {row[column.accessor as keyof TableRow]}
                    </td>
                  ))}
                  {actions && (
                    <td className="px-6 py-4 text-right">
                      {actions(row)}
                    </td>
                  )}
                  <td>
                    <button onClick={() => viewUserDetail(row)} className="p-1">
                      <IconButton color="inherit">
                        <VisibilityOutlinedIcon color="inherit"></VisibilityOutlinedIcon>
                      </IconButton>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Paginación */}
      {data.length > 0 && (
        <div className="flex justify-end gap-3 items-center mt-1 bg-lightText dark:bg-darkSecondary py-1">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded"
          >
            <IconButton color="primary">
              <ArrowBackIosIcon fontSize="small"></ArrowBackIosIcon>
            </IconButton>
          </button>

          <span className="text-xs text-darkSecondary dark:text-white">
            Página {currentPage} de {Math.ceil(data.length / rowsPerPage)}
          </span>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(data.length / rowsPerPage)}
          >
            <IconButton color="primary">
              <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
            </IconButton>
          </button>
        </div>
      )}
    </div>
  );
};
