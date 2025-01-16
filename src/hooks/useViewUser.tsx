import { useNavigate } from "react-router-dom";

export const useViewUser = (userId: string) => {
    const navigate = useNavigate();

    const handleViewUser = () => {
        console.log("hook");
        
    };

    return handleViewUser;
};


