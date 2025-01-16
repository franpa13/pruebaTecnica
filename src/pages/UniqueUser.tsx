import { useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import { useParams } from "react-router-dom";
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import { useFetchUserById } from "../hooks/useFetchById";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Order } from "../types/types";

import { motion } from "framer-motion";
import { ErrorText, LoadingComponent, PrimaryButton } from "../components";
export const UniqueUser = () => {
  const { idUser } = useParams();
  const [user, loading, error] = useFetchUserById("/data/data.json", idUser);
  const [showAllOrders, setShowAllOrders] = useState(false);



  if (!user) return null
  const viewAll = () => {
    setShowAllOrders((prev) => !prev);
  };

  const ordersToShow = showAllOrders ? user.orders : user.orders.slice(0, 4);

  // animaciones
  const animationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MainLayout>
      {loading ? (
        <LoadingComponent></LoadingComponent>
      ) : (

        <div className="p-2 md:p-8  dark:bg-darkPrimary dark:text-lightText">
          <div className="p-8 bg-white rounded shadow mt-24 dark:bg-darkSecondary">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Stats Section */}
              <motion.div initial="hidden"
                animate="visible"
                variants={animationVariants}
                transition={{ duration: 0.5, staggerChildren: 0.1 }} className="grid grid-cols-2 text-center order-last md:order-first mt-6 md:mt-0">
                <div>
                  <p className="font-bold text-gray-700 text-xl dark:text-lightText">{user.friends}</p>
                  <p className="text-gray-400 dark:text-mutedText">Friends</p>
                </div>
                <div>
                  <p className="font-bold text-gray-700 text-xl dark:text-lightText">{user.comments}</p>
                  <p className="text-gray-400 dark:text-mutedText">Comments</p>
                </div>
              </motion.div>

              {/* Profile Picture Section */}
              <motion.div initial="hidden"
                animate="visible"
                variants={animationVariants}
                transition={{ duration: 0.5, staggerChildren: 0.1 }} className="relative">
                <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-32 flex items-center justify-center text-indigo-500 dark:bg-darkSecondary dark:text-neonTurquoise">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </motion.div>

              {/* Active Section */}
              <motion.div initial="hidden"
                animate="visible"
                variants={animationVariants}
                transition={{ duration: 0.5, staggerChildren: 0.1 }} >

                {user.isActive ? (
                  <div className="space-x-8 flex justify-center mt-32 md:mt-0 md:justify-end">
                    <PrimaryButton text="Activo ahora" color="secondary" icon={RadioButtonCheckedOutlinedIcon} />
                  </div>
                ) : (
                  <div className="space-x-8 flex justify-center mt-32 md:mt-0 md:justify-end">
                    <PrimaryButton text="Inactivo" color="error" icon={RadioButtonUncheckedRoundedIcon} />
                  </div>
                )}
              </motion.div>
            </div>

            {/* User Information Section */}
            <motion.div initial="hidden"
              animate="visible"
              variants={animationVariants}
              transition={{ duration: 0.5, staggerChildren: 0.1 }} className="mt-8 md:mt-20 text-center border-b pb-12 dark:border-mutedText">
              <h1 className="text-4xl font-medium text-gray-700 dark:text-lightText">
                {user.name} <span className="font-light text-gray-500 dark:text-mutedText">{user.age}</span>
              </h1>
              <p className="mt-2 text-gray-600 dark:text-mutedText">{user.email}</p>
              <p className=" text-gray-600 mt-3 dark:text-mutedText">{user.address}</p>
              <p className="mt-2 text-gray-600 dark:text-mutedText">tel: {user.phone}</p>
              <p className="mt-2 text-gray-600 dark:text-mutedText">Registrado en : {user.registeredAt}</p>
            </motion.div>

            {/* Sección de órdenes */}
            {user.orders.length === 0 ? (
              <ErrorText text={`${user.name} no posee órdenes registradas`} />
            ) : (
              <>
                <p className="font-medium text-gray-500 dark:text-customBlue mt-2 text-lg text-center">
                  Órdenes registradas
                </p>

                <motion.div
                  className="grid w-full grid-cols-1  gap-4 md:gap-16 mt-10 md:grid-cols-4"
                  initial="hidden"
                  animate="visible"
                  variants={animationVariants}
                  transition={{ duration: 0.5, staggerChildren: 0.1 }}
                >
                  {ordersToShow.map((ord: Order) => (
                    <motion.div
                      className="flex w-full text-start flex-col items-start"
                      key={ord.orderId}
                      variants={animationVariants}
                    >
                      <p className="mt-0 text-start text-customBlue dark:text-accentBlue">
                        id de orden: #{ord.orderId}
                      </p>
                      <p className="mt-0 text-start text-darkSecondary dark:text-mutedText">
                        fecha de la orden: {ord.date}
                      </p>
                      <p className="mt-0 text-start text-darkSecondary dark:text-mutedText">
                        producto: {ord.product}
                      </p>
                      <p className="mt-0 text-start text-darkSecondary dark:text-mutedText">
                        precio: ${ord.amount}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}

            {user.orders.length > 4 && (
              <motion.div initial="hidden"
                animate="visible"
                variants={animationVariants}
                transition={{ duration: 0.5, staggerChildren: 0.1 }} className="flex justify-center mt-10">
                <PrimaryButton
                  onClick={viewAll}
                  icon={showAllOrders ? KeyboardArrowUpOutlinedIcon : ExpandMoreOutlinedIcon}
                  text={showAllOrders ? "Ver menos" : "Ver todas"}
                />
              </motion.div>
            )}

          </div>
        </div>
      )}
    </MainLayout>
  );
};
