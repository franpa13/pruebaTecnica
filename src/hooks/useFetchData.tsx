import { useEffect, useState } from "react";
import { User } from "../types/types";

export const useFetchData = (url: string): [User[], boolean, string] => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(url);
            if (!response.ok) throw new Error("Error al obtener los datos");
            const result = await response.json();

            setData(result);

            setTimeout(() => {
                setLoading(false);
            }, 400);


        };

        fetchData();
    }, [url]);

    return [data, loading, error];
};
