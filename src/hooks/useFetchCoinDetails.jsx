import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import { useQuery } from "react-query";
import { fetchCoinDetails } from "../services/fetchCoinDetails";

function useFetchCoinDetails(coinId) {
    const { currency } = useContext(CurrencyContext);

const {data, isLoading, isError, error} = useQuery(['coin', coinId], () => fetchCoinDetails(coinId), {
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    })

    return {
        data,
        isLoading,
        isError,
        error,
        currency
    }
}

export default useFetchCoinDetails;