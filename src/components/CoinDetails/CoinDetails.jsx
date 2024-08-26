import { useParams } from "react-router-dom";

function CoinDetails() {

    const {coinId} = useParams();

    return (
        <div>
            <h1>Coin Details Page {coinId}</h1>
        </div>
    )
}

export default CoinDetails;