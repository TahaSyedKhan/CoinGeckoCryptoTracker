import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import CoinDetails from "../CoinDetails/CoinDetails";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/details/:coinId" element={<CoinDetails />} />
        </Routes>
    )
}

export default Router