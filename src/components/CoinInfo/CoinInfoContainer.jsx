import { useQuery } from "react-query";
import { fetchCoinDataByChart } from "../../services/fetchCoinDataByChart";
import Alert from "../Alert/Alert";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { CurrencyContext } from "../../context/CurrencyContext";
import PageLoader from "../PageLoader/PageLoader";
import CoinInfo from "./CoinInfo";

function CoinInfoContainer() {

const {coinId} = useParams();
const { currency } = useContext(CurrencyContext);

    const [days, setDays] = useState(7);
    const [interval, setInterval] = useState('daily');

    const {data : historicData, isLoading, isError} = useQuery(['coin', coinId, currency, days, interval], () => fetchCoinDataByChart(coinId, currency, days, interval), {
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    })

    if(isLoading) {
        return <PageLoader />
    }
    if(isError) {
        return <Alert message="Failed To Fetch" type="error"/>
    }
    return (
        <>
            <CoinInfo
                historicData={historicData}
                days={days} 
                setDays={setDays} 
                interval={interval}
                setInterval={setInterval}
                currency={currency}/>
        </>
    )
}


export default CoinInfoContainer;