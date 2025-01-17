import { useEffect, useState } from "react";
import { useFetchData } from "./useFetchData";
import { User } from "../types/types";

export const useFetchUserById = (url: string, idUser: string | undefined): [User | null, boolean, string] => {
    const [data, initialLoading, error] = useFetchData(url);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const processUserData = () => {
            try {

                if (data.length > 0 && idUser &&initialLoading) {
                    const uniqueUser = data.find((user) => user.id === Number(idUser));
                    setUser(uniqueUser || null);
                }
 
                const delay = 400;

                setTimeout(() => {
                    setLoading(false);
                }, delay);

            } catch {
                setLoading(false);
            }
        };

        processUserData();
    }, [data, idUser]);

    return [user, loading, error];
};
