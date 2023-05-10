import { IDataDonut } from ".";

export const DonutViewStaticData: IDataDonut = {

    labels: ['Wheat', 'ButterBeans', 'Pottatos', 'Tomattos', 'Maize', 'Grain'],
    datasets: [
        {

            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#facc15',
                '#65a30d',
                '#0891b2',
                '#be123c',
                '#5b21b6',
                '#22c55e',
            ],
            borderColor: [
                '#facc15',
                '#65a30d',
                '#0891b2',
                '#be123c',
                '#5b21b6',
                '#22c55e',
            ],
            borderWidth: 1,
        },
    ],

}

export const LiveStockStaticData: IDataDonut = {

    labels: ['Cows', 'Chicken', 'Goats'],
    datasets: [
        {

            label: '# of Votes',
            data: [22, 133, 33,],
            backgroundColor: [
                '#facc15',
                '#65a30d',
                '#0891b2',

            ],
            borderColor: [
                '#facc15',
                '#65a30d',
                '#0891b2',

            ],
            borderWidth: 1,
        },
    ],

}


