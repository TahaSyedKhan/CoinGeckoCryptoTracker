import { useState } from "react"
import { CurrencyContext } from "./context/CurrencyContext";
import Router from "./components/Router/Router";


function App() {

const [currency, setCurrency] = useState('usd');
  return (
    <>
        <CurrencyContext.Provider value={{ currency, setCurrency}}>
            <Router />
        </CurrencyContext.Provider>
    </>       
  )
}

export default App
