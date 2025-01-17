import React, { useCallback, useEffect, useState } from "react";
import { TableProps, TableColumn, TableRow } from "./../../types/types";
import { ErrorText } from "../ui/ErrorText";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const TableUsers = ({ columns, data, actions, filterValue }: TableProps) => {

  const navigate = useNavigate();
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Solo para paginación si el filtro está vacío
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  const currentData = filterValue === "" ? data.slice(indexOfFirstRow, indexOfLastRow) : data;

  
  // evitar varios renderizados 
  const handlePageChange = useCallback(
    (newPage: number) => {
      if (newPage > 0 && newPage <= Math.ceil(data.length / rowsPerPage) && filterValue === "") {
        setCurrentPage(newPage);
      }
    },
    [data.length, rowsPerPage, filterValue] // Dependencias
  );

  return (
    <div className="w-full m-1 md:m-0 md:w-3/4 lg:w-1/2 md:mt-12 relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="overflow-x-auto">
        {data.length === 0 ? (
          <ErrorText text="No se encontraron usuarios" />
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
                  aria-label={row.name}
                  key={index}
                  className={`bg-white dark:text-gray-40 font-semibold border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ${activeIndex === index ? "bg-blue-100 dark:bg-blue-800" : ""}`}
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
                    <button onClick={() => navigate(`/user/${row.id}`)} className="p-1">
                      <IconButton color="inherit">
                        <VisibilityOutlinedIcon color="inherit" />
                      </IconButton>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Paginación: Solo se muestra cuando no hay filtro */}
      {filterValue === "" && data.length > 0 && (
        <div className="flex justify-end gap-3 items-center mt-1 bg-lightText dark:bg-darkSecondary py-1">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="rounded"
            aria-label="Página anterior"
          >
            <IconButton color="primary">
              <ArrowBackIosIcon fontSize="small" />
            </IconButton>
          </button>

          <span className="text-xs text-darkSecondary dark:text-white">
            Página {currentPage} de {Math.ceil(data.length / rowsPerPage)}
          </span>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === Math.ceil(data.length / rowsPerPage)}
            aria-label="Página siguiente"
          >
            <IconButton color="primary">
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </button>
        </div>
      )}
    </div>
  );
};
