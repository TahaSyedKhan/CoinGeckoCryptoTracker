import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../../services/fetchCoinDetails";

function CoinDetails() {

    const {coinId} = useParams();

const {data, isLoading, isError, error} = useQuery(['coindetails'], () => fetchCoinDetails(coinId), {
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    })
    
    if(isLoading) {
        return <div>Loading...</div>
    }
    if(isError) {
        return <div>Error: {error.message}</div>
    }
    return (
        <div>
            <h1>Coin Details Page {coinId}</h1>
        </div>
    )
}

export default CoinDetails;