import React from 'react';

interface Props {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  className?: string;
  type?: string;
  name?: string;
  id?: string;
  icon?: React.ReactNode;  // Prop para el ícono
}

export const InputText = ({
  value = '',
  onChange,
  placeholder = 'Ingrese texto...',
  className = '',
  type = 'text',
  name,
  id,
  icon
}: Props) => {
  return (
    <div className="relative w-full">
      {/* Contenedor del Input con ícono */}
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`dark:bg-darkSecondary border-[2px] border-customBlue dark:text-lightText text-black p-2 rounded w-full font-semibold mb-0 focus:outline-none focus:border-accentBlue  ${className}`} // Añadir padding izquierdo para el ícono
        type={type}
        name={name}
        id={id}
      />
      
      {/* Ícono dentro del contenedor */}
      {icon && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          {icon}
        </div>
      )}
    </div>
  );
};
