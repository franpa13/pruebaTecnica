import { useState } from "react";

import { InputText } from "../ui/InputText";
import SearchIcon from "@mui/icons-material/Search";

interface SearchComponentProps {
    onSearch: (value: string) => void;
}

export const SearchComponent = ({ onSearch }: SearchComponentProps) => {
    const [searchValue, setSearchValue] = useState("");

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearchValue(e.currentTarget.value);
        onSearch(e.currentTarget.value);
    };


    return (
        <div className="px-3 w-full md:px-5 md:w-1/2 lg:w-1/3 mt-9 md:mt-12 md:flex md:items-end md:gap-3">
            <InputText
                type="text"
                value={searchValue}
                onChange={onChange}
                icon={<SearchIcon />}
                placeholder="Ingrese el nombre o email del usuario..."
            />
            {/* <div className="w-1/3 mt-3">
                <PrimaryButton color="primary" text="Buscar" icon={SearchIcon} />
            </div> */}
        </div>
    );
};
