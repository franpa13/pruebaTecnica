import { useEffect, useState } from "react";

export const useFetchData = <T,>(url: string): [T[], boolean, string] => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {


                const response = await fetch(url);
                if (!response.ok) throw new Error("Error al obtener los datos");
                const result = await response.json();

                setData(result);



                setTimeout(() => {
                    setLoading(false);
                }, 300);
            } catch (err: any) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return [data, loading, error];
};
