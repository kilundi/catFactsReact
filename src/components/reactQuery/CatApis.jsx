//https://catfact.ninja/fact

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Axios from "axios";
import Spiner from './Spiner';
import { Puff } from 'react-loader-spinner'
const CatApi = () => {
    const { data, isLoading, isError, refetch } = useQuery(
        {
            queryKey: ["cat"],
            queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data)
        }
    );
    return (
        <div className=' flex flex-col'>
            { isLoading && <Puff /> }
            { data?.fact }
            <button onClick={ refetch }>Refetch</button>
        </div>
    )
}

export default CatApi