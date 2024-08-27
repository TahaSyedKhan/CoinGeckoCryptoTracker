import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

function CoinInfo({ historicData, days, setDays, interval, setInterval, currency }) {
    return (
        <div className="flex flex-col items-center justify-center mt-6 p-6 w-full">

            <Line 
                data={{
                    labels: historicData.prices.map(coinprice => {
                        let date = new Date(coinprice[0])
                        let time = date.getHours() > 12 ? `${date.getHours - 12} : ${date.getMinutes()} PM` : `${date.getHours()} : ${date.getMinutes()} AM`;
                        return days === 1 ? time : date.toLocaleDateString();
                    }),
                    datasets: [
                        {
                            label: `Price (Past ${days} ${days === 1 ? 'Day' : 'Days'}) in ${currency.toUpperCase()}`,
                            data: historicData.prices.map(coinprice => coinprice[1]),
                        }
                    ]
                }}
                options={{
                    responsive: true,
                    elements: {
                        point: {
                            radius: 0
                        }
                    }
                }}
            />
        </div>
    )
}

export default CoinInfo;