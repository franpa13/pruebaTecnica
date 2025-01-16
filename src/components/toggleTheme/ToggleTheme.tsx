import React, { useEffect } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeStore } from '../../store/useStoreTheme';

export const ToggleTheme: React.FC = () => {
    const { darkMode, toggleDarkMode } = useThemeStore();

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
    };
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);
    return (
        <div
            className="absolute top-3 px-[2px] right-0 bg-gray-600 md:px-1 md:top-7 md:right-0"
            style={{
                borderRadius: '25px 0  0 25px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
            }}
        >
            <Tooltip
                title={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                sx={{
                    bgcolor: '#4B5563',
                    color: 'white',
                }}
            >
                <IconButton onClick={toggleDarkMode} color="primary">
                    <AnimatePresence mode="wait">
                        {darkMode ? (
                            <motion.div
                                key="sun-icon"
                                variants={iconVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="flex justify-center items-center"
                            >
                                <ModeNightIcon
                                    color="inherit"
                                    sx={{
                                        fontSize: '27px',
                                        color: '#00BFFF',
                                        '@media (max-width:600px)': {
                                            fontSize: '22px',
                                        },
                                    }}
                                />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="moon-icon"
                                variants={iconVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="flex justify-center items-center"
                            >
                                <WbSunnyIcon
                                    color="inherit"
                                    sx={{
                                        fontSize: '27px',
                                        color: '#00BFFF',
                                        '@media (max-width:600px)': {
                                            fontSize: '22px',
                                        },
                                    }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </IconButton>
            </Tooltip>
        </div>
    );
};
