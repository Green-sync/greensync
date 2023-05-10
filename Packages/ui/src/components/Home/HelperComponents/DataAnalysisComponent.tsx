import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DonutViewStaticData, LiveStockStaticData } from '../HomeDto';




const cutout = 60

const options = {
    cutout: cutout,
    borderRadius: 1,
}

ChartJS.register(ArcElement, Tooltip, Legend);
export const DataAnalysisComponent = () => {

    return (
        <>
            <div className="flex justify-evenly items-center w-full">
                <div className='w-60'>
                    <p className="text-lg font-bold"> Crops</p>

                    <Doughnut data={DonutViewStaticData} options={options} />
                </div>
                <div className='w-60'  >
                    <p className="text-lg font-bold"> Live Stock</p>

                    <Doughnut data={LiveStockStaticData} options={options} />
                </div>

            </div>
        </>
    )
}