import axiosinstance from "../helpers/axiosinstance";

export async function fetchCoinData(page = 1, currency = 'usd') {
    const perPage = 10;
    try {
        const response = await axiosinstance.get(`/coins/markets?vs_currency=${currency}&=order=market_cap_desc&per_page=${perPage}&page=${page}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error)
        return null;
    }
}