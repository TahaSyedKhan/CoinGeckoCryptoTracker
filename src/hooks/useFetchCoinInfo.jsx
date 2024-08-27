import { useContext, useState } from "react";
import { CurrencyContext } from "../context/CurrencyContext";
import { useQuery } from "react-query";
import { fetchCoinDataByChart } from "../services/fetchCoinDataByChart";

function useFetchCoinInfo( coinId) {

    const { currency } = useContext(CurrencyContext);

    const [days, setDays] = useState(7);
    const [interval, setInterval] = useState('daily');

    const {data : historicData, isLoading, isError} = useQuery(['coin', coinId, currency, days, interval], () => fetchCoinDataByChart(coinId, currency, days, interval), {
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    })
    return {
        historicData,
        isLoading,
        isError,
        days,
        setDays,
        interval,
        setInterval,
        currency
    }
    
}

export default useFetchCoinInfo;