import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import { chartDays } from "../../helpers/constants";
import Alert from "../Alert/Alert";
Chart.register(CategoryScale);

function CoinInfo({ historicData, days, setDays, setInterval, currency }) {

    function handleDayChange(e) {
        console.log(e.target.options[e.target.selectedIndex].value);
        const daysSelected = e.target.options[e.target.selectedIndex].value;
        if(daysSelected == 1) {
            setInterval?.('');
        } else {
            setInterval?.('daily');
        }
        setDays?.(e.target.options[e.target.selectedIndex].value);
    }

    

    if(!historicData) {
        return <Alert message="No data available" type="warning" />
    }
    return (
        <div className="flex flex-col items-center justify-center mt-6 p-6 w-full">

            <div className="h-[500px] w-full">
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
                        maintainAspectRatio: false,
                        elements: {
                            point: {
                                radius: 0
                            }
                        }
                    }}
                />
            </div>

            <div className="flex justify-center mt-5 w-full">
                <select className="select select-primary w-full max-w-xs" onChange={handleDayChange}>
                    {chartDays.map((day, index) => {
                        return (
                            <option selected={days == day.value} key={index} value={day.value}> {day.label}</option>
                        )
                    })}
                </select>
            </div>
        
        </div>
    )
}

export default CoinInfo;