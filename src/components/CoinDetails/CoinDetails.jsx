import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../../services/fetchCoinDetails";
import parse from 'html-react-parser';
import { useContext } from "react";
import { CurrencyContext } from "../../context/CurrencyContext";
import PageLoader from "../PageLoader/PageLoader";
import CoinInfoContainer from "../CoinInfo/CoinInfoContainer";

function CoinDetails() {

const {coinId} = useParams();

const { currency } = useContext(CurrencyContext);

const {data, isLoading, isError, error} = useQuery(['coin', coinId], () => fetchCoinDetails(coinId), {
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    })
    
    if(isLoading) {
        return <PageLoader />
    }
    if(isError) {
        return <div>Error: {error.message}</div>
    }
    
    return (
        <div className="flex flex-col md:flex-row">

            <div className="md:w-1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-r-2 border-gray-500">

                <img className="h-52 mb-5" src={data?.image?.large} alt={data?.name} />
                <h1 className="text-4xl font-bold mb-5">{data?.name}</h1>
                <p className="w-full px-6 py-4 text-justify">{parse(data?.description?.en)}</p>
                <div className="w-full flex flex-col md:flex-row md:justify-around">
                    <div className="flex items-center mb-4 md:mb-0">
                        <h2 className="text-xl font-bold">Rank</h2>
                        <span className="ml-3 text-xl">{data?.market_cap_rank}</span>
                    </div>
                    <div className="flex items-center mb-4 md:mb-0">
                        <h2 className="text-xl text-yellow-400 font-bold">Current Price</h2>
                        <span className="ml-3 text-xl">{data?.market_data.current_price[currency]}</span>
                    </div>
                </div>

            </div>
            
            <div className="md:w-2/3 w-full p-6">
                <CoinInfoContainer />
            </div>
        </div>
    )
}

export default CoinDetails;