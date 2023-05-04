import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DonutViewStaticData } from '../HomeDto';


ChartJS.register(ArcElement, Tooltip, Legend);
export const DataAnalysisComponent = () => {




    return (
        <>
            <div className="flex justify-evenly items-center">
                <div className='w-60'>
                    <p className="text-lg font-bold"> Crops</p>

                    <Doughnut data={DonutViewStaticData} />
                </div>
                <div className='w-60'  >
                    <p className="text-lg font-bold"> Live Stock</p>

                    <Doughnut data={DonutViewStaticData} />
                </div>

            </div>
        </>
    )
}