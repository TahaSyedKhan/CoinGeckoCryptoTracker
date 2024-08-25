import { useState } from "react"
import Home from "./Pages/Home";
import { CurrencyContext } from "./context/CurrencyContext";


function App() {

const [currency, setCurrency] = useState('usd');
  return (
    <>
        <CurrencyContext.Provider value={{ currency, setCurrency}}>
            <Home />
        </CurrencyContext.Provider>
    </>       
  )
}

export default App
