import { ToggleTheme, Title, PrimaryButton } from "../components";
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Link, useLocation } from 'react-router-dom';
import { SvgIconComponent } from '@mui/icons-material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { motion } from "framer-motion"
interface RouteDetails {
    text: string;
    icon: SvgIconComponent;
}

interface Props {
    children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
    const location = useLocation();


    const getRouteDetails = (route: string): RouteDetails => {
        if (route === "/") {
            return {
                text: "Lista de Usuarios",
                icon: PeopleOutlineOutlinedIcon,
            };
        } else if (route.startsWith("/user")) {
            return {
                text: "Detalles del Usuario",
                icon: PersonOutlineOutlinedIcon,
            };
        }

        return {
            text: "Página no encontrada",
            icon: PeopleOutlineOutlinedIcon,
        };
    };
    // animaciones
    const animationVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };


    const { text, icon } = getRouteDetails(location.pathname);

    return (
        <div className="bg-lightText dark:bg-darkPrimary min-h-screen text-lightText">
            <motion.section initial="hidden"
                animate="visible"
                variants={animationVariants}
                transition={{ duration: 0.5, staggerChildren: 0.1 }} >

                <ToggleTheme />
                {text == "Detalles del Usuario" && (
                    <div className="block md:hidden absolute top-0.5 px-2 md:pl-4 pt-3">

                        <Link to={"/"} >
                            <PrimaryButton text="Volver" icon={HomeOutlinedIcon}></PrimaryButton>
                        </Link>
                    </div>)}
                <div className="flex flex-col w-full pt-20 md:pt-8 md:flex-row justify-between items-center">
                    <Title color="text-black" icon={icon} text={text} />
                    <div className="hidden md:block">
                        <ToggleTheme />
                    </div>
                </div>
                {text == "Detalles del Usuario" && (

                    <div className="hidden md:block md:pl-4 pt-3">

                        <Link to={"/"} >
                            <PrimaryButton text="Volver" icon={HomeOutlinedIcon}></PrimaryButton>
                        </Link>
                    </div>
                )}
            </motion.section>
            <section className=" py-6 ">
                {children}
            </section>
        </div>
    );
};
