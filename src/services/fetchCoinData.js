import axiosinstance from "../helpers/axiosinstance";

export async function fetchCoinData() {
    try {
        const response = await axiosinstance.get("/coins/markets?vs_currency=usd");
        console.log(response);
        return response;
    } catch (error) {
        console.error(error)
        return null;
    }
}