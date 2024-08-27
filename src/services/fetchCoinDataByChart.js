import axiosinstance from "../helpers/axiosinstance";

export async function fetchCoinDataByChart(id, currency, days, interval) {
    try {
        const response = await axiosinstance.get(`/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=${interval}`);
        return response.data;
    } catch (error) {
        console.error(error)
        return null;
    }
}