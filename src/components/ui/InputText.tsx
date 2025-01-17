
import { InputTextProps } from '../../types/types';

export const InputText = ({
  value = '',
  onChange,
  placeholder = 'Ingrese texto...',
  className = '',
  type = 'text',
  name,
  id,
  icon
}: InputTextProps) => {
  return (
    <div className="relative w-full">

      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`dark:bg-darkSecondary border-[2px] border-customBlue dark:text-lightText text-black p-2 rounded w-full font-semibold mb-0 focus:outline-none focus:border-accentBlue  ${className}`} // 
        type={type}
        aria-label={placeholder}
        name={name}
        id={id}
      />


      {icon && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          {icon}
        </div>
      )}
    </div>
  );
};
