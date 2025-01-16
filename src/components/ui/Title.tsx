import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';

interface TitleProps {
    text: string;


    color: string,
    icon?: React.ElementType<SvgIconProps>;
}

export const Title = ({
    text,

    color,

    icon: Icon
}: TitleProps) => {
    return (
        <div className="">
            <h1
                className={` text-shadow-lg md:pl-4  md:gap-2 justify-center  capitalize flex items-start text-2xl md:text-4xl font-extrabold text-black dark:text-white  ${color}`}
            >
                {text}
                <span className="bg-accentBlue dark:bg-customBlue text-blue-800 text-2xl font-semibold me-2 px-1.5 md:px-2.5 md:py-0.5 rounded  dark:text-blue-800 ms-2">{Icon && <Icon fontSize='medium' className="text-white sm:text-base md:text-lg lg:text-2xl xl:text-3xl" />}</span>

            </h1>
        </div >
    );
};
