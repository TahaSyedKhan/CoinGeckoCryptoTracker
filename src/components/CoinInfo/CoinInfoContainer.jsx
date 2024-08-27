
import Alert from "../Alert/Alert";
import { useParams } from "react-router-dom";
import PageLoader from "../PageLoader/PageLoader";
import CoinInfo from "./CoinInfo";
import useFetchCoinInfo from "../../hooks/useFetchCoinInfo";

function CoinInfoContainer() {

const {coinId} = useParams();
const {isLoading, isError, historicData, days, interval, setInterval, setDays, currency} = useFetchCoinInfo(coinId)

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