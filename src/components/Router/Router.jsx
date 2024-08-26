import { Route, Routes } from "react-router-dom";
import MainLayout from "../../Pages/Layout";
import { lazy, Suspense } from "react";
import PageLoader from "../PageLoader/PageLoader";

const Home = lazy(() => import('../../Pages/Home'));
const CoinDetails = lazy(() => import('../CoinDetails/CoinDetails'))

function Router() {
    return (
        <Routes>
            <Route  path="/" element={<MainLayout />}>

                <Route index element={
                    <Suspense fallback={<PageLoader />}>
                        <Home />
                    </Suspense>
                }/>

                <Route path="/details/:coinId" element={
                    <Suspense fallback={<PageLoader />}>
                        <CoinDetails />
                    </Suspense>
                } />
                
            </Route>
        </Routes>
    )
}

export default Router