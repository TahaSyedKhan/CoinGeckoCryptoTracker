import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import CoinDetails from "../CoinDetails/CoinDetails";
import MainLayout from "../../Pages/Layout";

function Router() {
    return (
        <Routes>
            <Route  path="/" element={<MainLayout />}>
                <Route index element={<Home />}/>
                <Route path="/details/:coinId" element={<CoinDetails />} />
            </Route>
        </Routes>
    )
}

export default Router